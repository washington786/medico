import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import ScrollWrapper from "../../../Globals/ScrollWrapper";
import CustomeTop from "../../../components/Auth/CustomeTop";
import { colors } from "../../../Globals/Colors";
import { Button, TextInput } from "react-native-paper";
import { SelectList } from "react-native-dropdown-select-list";
import { useNavigation } from "@react-navigation/native";

const isIos = Platform.OS === "ios";

const GuardianDetails = () => {
  const navigation = useNavigation();
  const [load, setLoading] = useState<boolean>(false);

  const transitApp = () => {
    setLoading(true);
    navigation.navigate("app");
    setLoading(false);
  };
  return (
    <View style={styles.view}>
      <ScrollWrapper>
        <CustomeTop
          title="Guardian Information"
          sub="please enter only valid credentials for our easy access on emergency."
        />
        <KeyboardAvoidingView
          keyboardVerticalOffset={isIos ? 800 : 0}
          behavior={isIos ? "padding" : "height"}
          enabled={true}
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
            label={"Email address"}
            keyboardType="email-address"
            keyboardAppearance="light"
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label={"Phone Number"}
            keyboardType="phone-pad"
            keyboardAppearance="light"
            mode="outlined"
            style={styles.input}
          />
          <InformationWrapper />
          <Button
            mode="contained"
            style={styles.btnContained}
            labelStyle={styles.label}
            onPress={transitApp}
            loading={load}
          >
            submit
          </Button>
        </KeyboardAvoidingView>
      </ScrollWrapper>
    </View>
  );
};

const InformationWrapper = () => {
  const [selectedGuardian, setSelectedGuardian] = useState("");
  const guardian = [
    { key: "1", value: "Co-Parent" },
    { key: "2", value: "Adoptive Parent" },
    { key: "3", value: "Parent/Guardian" },
    { key: "4", value: "Foster Parent" },
    { key: "5", value: "Temporary Guardian" },
    { key: "6", value: "Grandparent/Great-Parent" },
  ];
  return (
    <View>
      <SelectList
        setSelected={(val: any) => setSelectedGuardian(val)}
        data={guardian}
        save="value"
        search={false}
        placeholder="choose guardian"
        inputStyles={styles.selector}
        boxStyles={styles.box}
      />
    </View>
  );
};
export default React.memo(GuardianDetails);

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
