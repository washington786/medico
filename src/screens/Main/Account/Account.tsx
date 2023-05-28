import { StyleSheet, View ,Text} from "react-native";
import React, { useEffect, useState } from "react";
import ScrollWrapper from "../../../Globals/ScrollWrapper";
import { Button, Paragraph } from "react-native-paper";
import { colors } from "../../../Globals/Colors";
import { roboto } from "../../../Globals/Fonts";
import Wrapper, {
  TitleWrapper,
} from "../../../components/main/settings/Wrapper";
import { useNavigation } from "@react-navigation/native";
import { db, auth } from "../../../components/Auth/firebase";
import { ref, onValue } from "firebase/database";
import { signOut } from "firebase/auth";
const Account = () => {
  const navigation = useNavigation();
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
  const transitAccount = (): void => {
    navigation.navigate("profile", {
      Firstname: Firstname,
      Lastname: Lastname,
      email: email,
      uid: uid,
    });
  };
  const onLogoutUser=()=>{
   
    signOut(auth);
    navigation.navigate('login');
    
  }
  const transitNotifications = (): void => {
    navigation.navigate("notifications");
  };

  const transitHelpCenter = (): void => {
    navigation.navigate("help");
  };

  const transitTerms = (): void => {
    navigation.navigate("terms");
  };

  const transitPolicy = (): void => {
    navigation.navigate("privacy");
  };
  const transitReminder = (): void => {
    navigation.navigate("reminder");
  };

  return (
    <>
      <HeaderComp />
      <ScrollWrapper>
        <ContainerWrapper>
          <TitleWrapper title={"account"} />
<Text></Text>
          <Row>
            <Wrapper
              title="my account"
              icon={"user"}
              onPress={transitAccount}
            />
            <Button
              mode="contained"
              contentStyle={styles.btnContent}
              style={styles.btn}
              onPress={onLogoutUser}
            >
              Log out
            </Button>
          </Row>
          <Wrapper
            title="Notifications"
            icon={"bell"}
            onPress={transitNotifications}
          />

          <TitleWrapper title={"Reminder"} />
          <Wrapper title="Reminder" icon={"clock"} onPress={transitReminder} />

          <TitleWrapper title={"Support"} />
          <Wrapper
            title="help center"
            icon={"help-circle"}
            onPress={transitHelpCenter}
          />

          <TitleWrapper title={"About"} />
          <Wrapper
            title="terms of use"
            icon={"bookmark"}
            onPress={transitTerms}
          />
          <Wrapper
            title="Privacy Policies"
            icon={"user-check"}
            onPress={transitPolicy}
          />
        </ContainerWrapper>
      </ScrollWrapper>
    </>
  );
};

const HeaderComp = () => {
  return (
    <View style={styles.header}>
      <Paragraph style={styles.headerTxt}>Account Settings</Paragraph>
    </View>
  );
};

type con = {
  children: any;
};

const ContainerWrapper = (props: con) => {
  return <View style={styles.con}>{props.children}</View>;
};

type c = {
  children: any;
};
const Row = (props: c) => {
  return <View style={styles.accCon}>{props.children}</View>;
};

export default React.memo(Account);

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary_1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  headerTxt: {
    fontFamily: roboto.medium,
    fontSize: 17,
    textTransform: "capitalize",
  },
  con: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    flex: 1,
  },
  accCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnContent: {
    borderRadius: 0,
    backgroundColor: colors.primary_5,
  },
  btn: {
    marginHorizontal: 8,
    borderRadius: 5,
  },
});
