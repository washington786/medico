import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import MainView from "../../../Globals/MainView";
import HeaderBackBg from "../../../components/main/Home/HeaderBackBg";
import ScrollWrapper from "../../../Globals/ScrollWrapper";
import { colors } from "../../../Globals/Colors";
import {
  Button,
  Dialog,
  Portal,
  Provider,
  RadioButton,
  Text,
  TextInput,
} from "react-native-paper";

// location
import * as Location from "expo-location";
import Constants from "expo-constants";
import axios from "axios";
import { Divider } from "react-native-elements";
import Scroller from "../../../Globals/Scroller";
import { db,auth } from "../../../components/Auth/firebase";
import { ref,onValue ,push} from "firebase/database";
const isIos = Platform.OS === "ios";

const Ambulance = () => {
  return (
    <MainView>
      <HeaderBackBg title="Request Ambulance" />
      <Provider>
        <Scroller>
          <View style={styles.con}>
            <InputsWrapper />
          </View>
        </Scroller>
      </Provider>
    </MainView>
  );
};

const InputsWrapper = () => {
  const [address, setAddress] = useState<any>(null);
  //   location
  const getAddressFromCoordinates = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
      );
      const { address } = response.data;
      return address;
    } catch (error) {
      console.error("Error fetching address:", error);
      return null;
    }
  };

  useEffect(() => {
    const getLocationAsync = async () => {
      try {
        if (Constants.isDevice) {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== "granted") {
            console.error("Location permission not granted");
            return;
          }

          let location = await Location.getCurrentPositionAsync({});
          const { latitude, longitude } = location.coords;
          const address = await getAddressFromCoordinates(latitude, longitude);
          setAddress(address);
        } else {
          console.error("Device not supported for location");
        }
      } catch (error) {
        console.error("Error getting location:", error);
      }
    };
    // return ()=>getLocationAsync();
    getLocationAsync();
  }, []);

  if (address) {
    var { city, state, country, house_number, postcode, road, suburb } =
      address;
  }

  let fullAddress: string =
    house_number +
    " " +
    road +
    " " +
    suburb +
    " " +
    city +
    " ," +
    state +
    ", " +
    postcode +
    ", " +
    country;
  //   end-location

  // accessibility
  const [accessibility, setAccessibility] = useState("none");
  const [safety, setSafety] = useState("none");
  const [addons, setAddons] = useState("none");

  // dialog
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  const [description,setDescription]=useState('')
  const user = auth.currentUser?.uid
  const [Firstname, setFirname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState("");
  useEffect(() => {
    const StudentRef = ref(db, "/MedicoClient/" + user);
    onValue(StudentRef, snap => {
      setFirname(snap.val() && snap.val().Firstname);
      setLastname(snap.val() && snap.val().Lastname);
      setEmail(snap.val() && snap.val().email);
      setUid(snap.val() && snap.val().uid);
    });
  }, []);
  const onHandleAdd=()=>{
    const AddRef =ref(db,'MedicoRequest')
    push(AddRef,{
        
      Firstname,
      uid,fullAddress,Status:'Pending',
      user,accessibility,safety,addons
    })
    showDialog()
  }
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={isIos ? 800 : 0}
      behavior={isIos ? "padding" : "height"}
      enabled={true}
    >
      {/* <TextInput
        label={"Brief description of the emergency"}
        keyboardType="default"
        keyboardAppearance="light"
        mode="outlined"
        style={[styles.input, styles.multi]}
        numberOfLines={3}
        multiline={true}
        value={description}
        onChangeText={(text)=>setDescription(text)}
      /> */}
      <TextInput
        label={"Address of your staying"}
        keyboardType="default"
        keyboardAppearance="light"
        mode="outlined"
        style={[styles.input]}
        value={address ? fullAddress : "enter address"}
        numberOfLines={2}
        multiline={true}
      />
      <MainWrapper>
        <Text variant="labelMedium">Accessibility Information</Text>
        <Divider orientation="horizontal" />
        <RadioButton.Group
          onValueChange={(value) => setAccessibility(value)}
          value={accessibility}
        >
          <Row>
            <RadioButton value={"none"} />
            <Text variant="titleSmall">none</Text>
          </Row>
          <Row>
            <RadioButton value={"locked gate"} />
            <Text variant="titleSmall">locked gate</Text>
          </Row>
          <Row>
            <RadioButton value={"narrow hallways"} />
            <Text variant="titleSmall">narrow hallways</Text>
          </Row>
          <Row>
            <RadioButton value={"aggressive dogs"} />
            <Text variant="titleSmall">aggressive dogs</Text>
          </Row>
        </RadioButton.Group>
      </MainWrapper>
      {/* safety information */}
      <MainWrapper>
        <Text variant="labelMedium">Safety Information</Text>
        <Divider orientation="horizontal" />
        <RadioButton.Group
          onValueChange={(value) => setSafety(value)}
          value={safety}
        >
          <Row>
            <RadioButton value={"none"} />
            <Text variant="titleSmall">none</Text>
          </Row>
          <Row>
            <RadioButton value={"fire"} />
            <Text variant="titleSmall">fire</Text>
          </Row>
          <Row>
            <RadioButton value={"violence"} />
            <Text variant="titleSmall">violence</Text>
          </Row>
          <Row>
            <RadioButton value={"hazardous materials"} />
            <Text variant="titleSmall">hazardous materials</Text>
          </Row>
        </RadioButton.Group>
      </MainWrapper>
      {/* additional information */}
      <MainWrapper>
        <Text variant="labelMedium">Additional Information</Text>
        <Divider orientation="horizontal" />
        <RadioButton.Group
          onValueChange={(value) => setAddons(value)}
          value={addons}
        >
          <Row>
            <RadioButton value={"none"} />
            <Text variant="titleSmall">none</Text>
          </Row>
          <Row>
            <RadioButton value={"allergies"} />
            <Text variant="titleSmall">allergies</Text>
          </Row>
          <Row>
            <RadioButton value={"language barrier"} />
            <Text variant="titleSmall">language barrier</Text>
          </Row>
          <Row>
            <RadioButton value={"special circumstances"} />
            <Text variant="titleSmall">special circumstances</Text>
          </Row>
        </RadioButton.Group>
      </MainWrapper>

      <Button
        mode="contained"
        style={styles.btnContained}
        labelStyle={styles.label}
        onPress={onHandleAdd}
      >
        send request
      </Button>

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Successful</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">your request has been sent successfully, please check notifications for this ticket.</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </KeyboardAvoidingView>
  );
};

type access = {
  children: any;
};
const MainWrapper = (props: access) => {
  return <View style={styles.wrap}>{props.children}</View>;
};

type row = {
  children: any;
  style?:object
};
export const Row = (props: row) => {
  return <View style={[styles.row,props.style]}>{props.children}</View>;
};

export default React.memo(Ambulance);

const styles = StyleSheet.create({
  con: {
    marginVertical: 8,
    paddingHorizontal: 14,
    flex: 1,
  },
  btnContained: {
    borderRadius: 2,
    backgroundColor: colors.primary_10,
    paddingVertical: 5,
    marginVertical: 10,
  },
  label: {
    textTransform: "uppercase",
  },
  btnText: {
    color: colors.primary_8,
  },
  btnOutline: {
    marginVertical: 8,
    borderRadius: 2,
  },
  input: {
    marginVertical: 5,
  },
  view: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
    backgroundColor: "white",
  },
  multi: {
    maxHeight: 90,
    minHeight: 90,
  },
  selector: {
    borderRadius: 0,
  },
  box: {
    borderRadius: 4,
    marginVertical: 8,
  },
  wrap: {
    marginVertical: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  desc: {
    paddingHorizontal: 8,
  },
});
