import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import React from "react";
import BackgroundWrapper from "../../../components/Auth/BackgroundWrapper";
import { url } from "../Login/LoginWrapper";
import LoginBottomView from "../../../components/Auth/LoginBottomView";
import Top from "../../../components/Auth/Top";
import ScrollWrapper from "../../../Globals/ScrollWrapper";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../Globals/Colors";
import { useNavigation } from "@react-navigation/native";

const isIos = Platform.OS === "ios";
const height = Dimensions.get("window").height;

const ResetWrapper = () => {
  let title: string = "forgot your password?";
  let subtitle: string =
    "enter your registered email to recover your password.";
  return (
    <BackgroundWrapper url={url}>
      <LoginBottomView style={styles.btmView}>
        <Top title={title} subtitle={subtitle} />
        <InputWrapper />
      </LoginBottomView>
    </BackgroundWrapper>
  );
};

export default React.memo(ResetWrapper);

const InputWrapper = () => {
  const navigation = useNavigation();
  const handleBack = (): void => {
    navigation.goBack();
  };
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

        <Button
          mode="contained"
          style={styles.btnContained}
          labelStyle={styles.label}
        >
          submit
        </Button>
        <Button
          mode="outlined"
          style={styles.btnOutline}
          labelStyle={[styles.label, styles.btnText]}
          onPress={handleBack}
        >
          cancel
        </Button>
      </KeyboardAvoidingView>
    </ScrollWrapper>
  );
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
  w: {
    height: 200,
    paddingBottom: 300,
  },
  btmView: {
    maxHeight: height * 0.43,
    minHeight: height * 0.43,
  },
});
