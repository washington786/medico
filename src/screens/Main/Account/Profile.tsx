import { Platform, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import MainWrapperView from "../../../components/main/MainWrapperView";
import HeaderBack from "../../../components/main/settings/HeaderBack";
import {
  Avatar,
  Button,
  Paragraph,
  Text,
  TextInput,
} from "react-native-paper";
import { colors, rgba } from "../../../Globals/Colors";
import { roboto } from "../../../Globals/Fonts";
import Scroller from "../../../Globals/Scroller";
import { MainStyle } from "../../../styles/MainStyle";
import { useRoute } from "@react-navigation/native";
import { db,auth } from "../../../components/Auth/firebase";
import { ref,onValue,child ,update} from "firebase/database";
const isIos = Platform.OS === "ios";

const Profile = () => {
  return (
    <Scroller>
      <MainWrapperView>
        <HeaderBack />
        <ProfileWrap />
        <TextInputsWrapper />
      </MainWrapperView>
    </Scroller>
  );
};
const ProfileWrap = () => {
  const route =useRoute()
  const Firstname=route.params.Firstname
  const Lastname=route.params.Lastname
  const email=route.params.email
  return (
    <View style={styles.con}>
      <Avatar.Text
        label="DM"
        size={70}
        color={"white"}
        labelStyle={styles.label}
        style={styles.avatar}
      />
      <Paragraph>{Firstname} {Lastname}</Paragraph>
      <Text variant="bodySmall" style={styles.email}>
        {email}
      </Text>
    </View>
  );
};

const TextInputsWrapper = () => {
  const route = useRoute()
  const user = auth.currentUser?.uid
  const [email, setEmail] = useState(route.params.email);
  const [firstName, setFirstName] = useState(route.params.Firstname);
  const [lastName, setLastName] = useState(route.params.Lastname);
  const [uid, setUid] = useState(route.params.uid);
  const editprofile=()=>{
  
    const medicoRef=ref(db, "/MedicoClient/" )
    const medicoChild = child(medicoRef,uid)
update(medicoChild,{Lastname:lastName,Firstname:firstName,
  })
    // .then(()=>medicoRef.once('value'))
    // onValue(medicoChild)
    // .then(snapshot=>snapshot.val())
    // .catch(error => ({
    //   errorCode: error.code,
    //   errorMessage: error.message
    // })); 
    // navigation.navigate('Profile')
  }
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder={email}
        inputMode="email"
        mode="outlined"
        outlineStyle={styles.outlined}
        style={styles.input}
      />
      <TextInput
        placeholder={firstName}
        inputMode="text"
        mode="outlined"
        outlineStyle={styles.outlined}
        style={styles.input}
        value={firstName}
        onChangeText={(text)=>setFirstName(text)}
      />
      <TextInput
        placeholder={lastName}
        inputMode="text"
        mode="outlined"
        outlineStyle={styles.outlined}
        style={styles.input}
        value={lastName}
        onChangeText={(text)=>setLastName(text)}
      />

      <Button
        mode="contained"
        contentStyle={MainStyle.buttonGlobal}
        labelStyle={MainStyle.label}
        style={MainStyle.btn}
        onPress={()=>editprofile()}
      >
        update profile
      </Button>
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({
  label: {
    fontFamily: roboto.regular,
  },
  avatar: {
    backgroundColor: colors.primary_5,
    alignSelf: "center",
    elevation: 2,
  },
  con: {
    alignItems: "center",
    justifyContent: "center",
  },
  email: {
    fontFamily: roboto.light,
    letterSpacing: 1,
  },
  inputWrapper: {
    paddingVertical: 10,
  },
  outlined: {
    borderRadius: 2,
    borderWidth: isIos ? 0.5 : 1,
    borderColor: isIos ? rgba.grey_2 : rgba.grey_1,
  },
  input: {
    marginVertical: 6,
  },
});
