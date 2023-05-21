import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";

import { BarCodeScanner } from "expo-barcode-scanner";
import { Button, Text, TextInput } from "react-native-paper";
import { colors } from "../../../Globals/Colors";
import ScrollWrapper from "../../../Globals/ScrollWrapper";
import CustomeTop from "../../../components/Auth/CustomeTop";

// location
import * as Location from "expo-location";
import Constants from "expo-constants";
import axios from "axios";

// selector
import { SelectList } from "react-native-dropdown-select-list";
import { useNavigation } from "@react-navigation/native";

const isIos = Platform.OS === "ios";

const StudentDetails = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [scanned, setScanned] = useState(false);
  const [barcodeData, setBarcodeData] = useState<string | any>(null);

  const [address, setAddress] = useState<any>(null);

  //   permission
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

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

  //   location
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

  const handleBarcodeScanned = ({ data }) => {
    setScanned(true);
    setBarcodeData(data);
    setScanned(false);
  };

  const startScan = () => {
    setScanned(true);
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  let studentNo: string = barcodeData;

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
    let finalStudentNo:string="";
    if(studentNo){
        finalStudentNo = studentNo.substring(0,studentNo.length);
    }

  const transitToGuardian = (): void => {
    navigation.navigate("guardian");
  };

  return (
    <View style={styles.view}>
      <ScrollWrapper>
        <CustomeTop
          title="Create Your Student Details"
          sub="please enter only valid credentials."
        />
        <KeyboardAvoidingView
          keyboardVerticalOffset={isIos ? 800 : 0}
          behavior={isIos ? "padding" : "height"}
          enabled={true}
        >
          {!scanned && (
            <TextInput
              label={"Student Number"}
              keyboardType="number-pad"
              keyboardAppearance="light"
              mode="outlined"
              style={styles.input}
              value={finalStudentNo}
              onPressIn={startScan}
              onBlur={startScan}
              onFocus={startScan}
            />
          )}

          {!scanned && (
            <>
              <TextInput
                label={"Phone Number"}
                keyboardType="phone-pad"
                keyboardAppearance="light"
                mode="outlined"
                style={styles.input}
              />

              <TextInput
                label={"Whatsapp Number"}
                keyboardType="phone-pad"
                keyboardAppearance="light"
                mode="outlined"
                style={styles.input}
              />

              <TextInput
                label={"Address of your staying"}
                keyboardType="default"
                keyboardAppearance="light"
                mode="outlined"
                style={[styles.input, styles.multi]}
                value={address ? fullAddress : "enter address"}
                numberOfLines={4}
                multiline={true}
              />
              <InformationWrapper />
              <Button
                mode="contained"
                style={styles.btnContained}
                labelStyle={styles.label}
                onPress={transitToGuardian}
              >
                continue
              </Button>
            </>
          )}
        </KeyboardAvoidingView>
        <View style={{ flex: 1 }}>
          {scanned && (
            <View style={{ flex: 1 }}>
              <BarCodeScanner
                onBarCodeScanned={handleBarcodeScanned}
                style={{ flex: 1 }}
              />
            </View>
          )}
        </View>
      </ScrollWrapper>
    </View>
  );
};

const InformationWrapper = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const courses = [
    { key: "1", value: "Civil Engineering" },
    { key: "2", value: "Electrical Engineering" },
    { key: "3", value: "Mechanical Engineering" },
    { key: "4", value: "Architecture" },
    { key: "5", value: "Construction Managment" },
    { key: "6", value: "IT" },
    { key: "7", value: "Computer Science" },
    { key: "8", value: "Multimedia" },
    { key: "9", value: "Game design and development" },
    { key: "10", value: "Commerce in Accounting" },
    { key: "11", value: "Administration" },
    { key: "12", value: "HR Management" },
    { key: "13", value: "Tourism Managment" },
    { key: "14", value: "Marketing" },
    { key: "15", value: "Chemistry" },
    { key: "16", value: "Environmental Health" },
    { key: "17", value: "Chemistry" },
  ];
  const faculties = [
    { key: "1", value: "Faculty of Engineering and the Built Environment" },
    { key: "2", value: "Faculty of Information and Communication Technology" },
    { key: "3", value: "Faculty of Management Sciences" },
    { key: "4", value: "Faculty of Humanities" },
    { key: "5", value: "Faculty of Science" },
    { key: "6", value: "Faculty of Arts and Design" },
  ];
  return (
    <View>
      <SelectList
        setSelected={(val: any) => setSelectedFaculty(val)}
        data={faculties}
        save="value"
        search={false}
        placeholder="choose faculty"
        inputStyles={styles.selector}
        boxStyles={styles.box}
      />
      <SelectList
        setSelected={(val: any) => setSelectedCourse(val)}
        data={courses}
        save="value"
        search={false}
        placeholder="choose course"
        inputStyles={styles.selector}
        boxStyles={styles.box}
      />
    </View>
  );
};

export default React.memo(StudentDetails);

const styles = StyleSheet.create({
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
});
