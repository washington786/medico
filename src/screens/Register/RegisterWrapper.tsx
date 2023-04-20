import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import BackgroundWrapper from "../../components/Auth/BackgroundWrapper";
import { url } from "../Login/LoginWrapper";
import LoginBottomView from "../../components/Auth/LoginBottomView";
import Top from "../../components/Auth/Top";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../Globals/Colors";
import ScrollWrapper from "../../Globals/ScrollWrapper";
import { useNavigation } from "@react-navigation/native";

const isIos = Platform.OS === "ios";

const height = Dimensions.get("window").height;

const RegisterWrapper = () => {
  let title: string = "Create account";
  let subtitle: string = "please enter valid credentials to create an account.";
  return (
    <BackgroundWrapper url={url}>
      <LoginBottomView style={styles.btmView}>
        <Top title={title} subtitle={subtitle} />
        <InputWrapper />
      </LoginBottomView>
    </BackgroundWrapper>
  );
};

const InputWrapper = () => {
    const navigation = useNavigation();
    const handleSignIn=():void=>{
        navigation.navigate('login');
    }
  return (
    <ScrollWrapper>
      <KeyboardAvoidingView
        keyboardVerticalOffset={isIos ? 100 : 0}
        behavior={isIos ? "padding" : "height"}
      >
        <TextInput
          label={"First Name"}
          keyboardType="default"
          keyboardAppearance="light"
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label={"Last Name"}
          keyboardType="default"
          keyboardAppearance="light"
          mode="outlined"
          style={styles.input}
        />

        <TextInput
          label={"Email"}
          keyboardType="email-address"
          keyboardAppearance="light"
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label={"Password"}
          keyboardType="default"
          keyboardAppearance="light"
          secureTextEntry
          mode="outlined"
          style={styles.input}
        />
        <Button
          mode="contained"
          style={styles.btnContained}
          labelStyle={styles.label}
        >
          create account
        </Button>
        <Button
          mode="outlined"
          style={styles.btnOutline}
          labelStyle={[styles.label, styles.btnText]}
          onPress={handleSignIn}
        >
          sign in
        </Button>
      </KeyboardAvoidingView>
    </ScrollWrapper>
  );
};

export default React.memo(RegisterWrapper);

const styles = StyleSheet.create({
  input: {
    marginVertical: 5,
  },

  btnContained: {
    borderRadius: 2,
    backgroundColor: colors.primary_10,
    paddingVertical: 5,
    marginVertical: 6,
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
    paddingVertical: 5,
  },
  btmView: {
    maxHeight: height * 0.6,
    minHeight: height * 0.6,
  },
});
