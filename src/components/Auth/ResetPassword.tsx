import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { Button, Modal, Portal, Provider, TextInput } from "react-native-paper";
import Top from "./Top";
import ScrollWrapper from "../../Globals/ScrollWrapper";
import { colors, rgba } from "../../Globals/Colors";

const isIos = Platform.OS === "ios";

interface r {
  onDismiss?(): void;
  isVisible: boolean;
}

const ResetPassword = (props: r) => {
  let title: string = "forgot your password?";
  let subtitle: string =
    "enter your registered email to recover your password.";
  return (
    <View style={styles.main}>
      <Provider>
        <Portal>
          <Modal
            visible={props.isVisible}
            contentContainerStyle={styles.modal}
            onDismiss={props.onDismiss}
          >
            <Top title={title} subtitle={subtitle} />
            <InputWrapper onHandleReset={props.onDismiss}/>
          </Modal>
        </Portal>
      </Provider>
    </View>
  );
};

interface input {
    onHandleReset?(): void;
}
const InputWrapper = (props:input) => {
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
          onPress={props.onHandleReset}
        >
          cancel
        </Button>
      </KeyboardAvoidingView>
    </ScrollWrapper>
  );
};

export default React.memo(ResetPassword);

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
    paddingVertical:5
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
    paddingVertical:5
  },
  w: {
    height: 200,
    paddingBottom: 300,
  },
  modal: {
    flex: 1,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 100,
    left: 0,
    right: 0,
    top:25
  },
  main:{
    flex:1,
    flexGrow:1,
    backgroundColor:rgba.grey_8
  }
});
