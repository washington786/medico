import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../../Globals/Colors";
import {
  Button,
  TextInput,
} from "react-native-paper";
import BackgroundWrapper from "../../components/Auth/BackgroundWrapper";
import Top from "../../components/Auth/Top";
import LoginBottomView from "../../components/Auth/LoginBottomView";
import ScrollWrapper from "../../Globals/ScrollWrapper";
import { useNavigation } from "@react-navigation/native";

export let url =
  "https://images.pexels.com/photos/8442280/pexels-photo-8442280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const isIos = Platform.OS === "ios";

const LoginWrapper = () => {
  let title: string = "Login Into Account";
  let subtitle: string = "please entered your registered credentials to login.";
  return (
    <BackgroundWrapper url={url}>
      <LoginBottomView>
        <Top title={title} subtitle={subtitle} />
        <InputWrapper />
      </LoginBottomView>
    </BackgroundWrapper>
  );
};

const InputWrapper = () => {
  const navigation = useNavigation();
    const handleSignUp=():void=>{
        navigation.navigate('register');
    }
    const handleReset=():void=>{
        navigation.navigate('reset');
    }
  return (
    <ScrollWrapper>
      <KeyboardAvoidingView
        keyboardVerticalOffset={isIos ? 800 : 0}
        behavior={isIos ? "padding" : "height"}
        enabled={true}
      >
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
          mode="text"
          style={styles.btn}
          labelStyle={styles.btnText}
          onPress={handleReset}
        >
          Forgot Password
        </Button>

        <Button
          mode="contained"
          style={styles.btnContained}
          labelStyle={styles.label}
        >
          sign in
        </Button>

        <Button
          mode="outlined"
          style={styles.btnOutline}
          labelStyle={[styles.label, styles.btnText]}
          onPress={handleSignUp}
        >
          create account
        </Button>

        {isIos && <Views />}
      </KeyboardAvoidingView>
    </ScrollWrapper>
  );
};

export default React.memo(LoginWrapper);

const Views = () => {
  return <View style={styles.w} />;
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 5,
  },
  btn: {
    alignSelf: "flex-end",
  },
  btnContained: {
    borderRadius: 2,
    backgroundColor: colors.primary_10,
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
  w: {
    height: 200,
    paddingBottom: 300,
  },
});
