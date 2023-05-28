import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import ScrollWrapper from "../../../Globals/ScrollWrapper";
import MainWrapperView from "../../../components/main/MainWrapperView";
import HeaderBack from "../../../components/main/HeaderBack";
import { Button, IconButton, TextInput } from "react-native-paper";
import { colors } from "../../../Globals/Colors";

import { MultipleSelectList } from "react-native-dropdown-select-list";

import { SelectList } from "react-native-dropdown-select-list";
import { db,auth } from "../../../components/Auth/firebase";
import { ref,push } from "firebase/database";
const isIos = Platform.OS === "ios";

const height = Dimensions.get("screen").height;

const Reminder = () => {
  return (
    <ScrollWrapper>
      <MainWrapperView>
        <HeaderBack />
        <InputWrapper />
      </MainWrapperView>
    </ScrollWrapper>
  );
};

const InputWrapper = () => {
  const [selected, setSelected] = useState([]);

  const [selectedTime, setSelectedTime] = useState([]);

  const data = [
    { key: "1", value: "Liquid", disabled: true },
    { key: "2", value: "Tablet" },
    { key: "3", value: "Capsules" },
    { key: "4", value: "Drops", disabled: true },
    { key: "5", value: "Inhalers" },
    { key: "6", value: "Injections" },
    { key: "7", value: "Topical medicines" },
    { key: "7", value: "Topical medicines" },
  ];

  const time = [
    { key: "1", value: "08:00" },
    { key: "2", value: "09:00" },
    { key: "3", value: "10:00" },
    { key: "4", value: "12:00" },
    { key: "5", value: "14:00" },
    { key: "6", value: "16:00" },
    { key: "7", value: "18:00" },
    { key: "8", value: "20:00" },
    { key: "9", value: "21:00" },
    { key: "10", value: "22:00" },
  ];

  const onHandleSelectedType = (event: any): void => {
    setSelected(event);
  };
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const CurrentID = auth.currentUser?.uid;
  const onHandleAdd=()=>{
    const AddRef =ref(db,'MedicoReminder')
    push(AddRef,{
        
      selectedTime,selected,
      CurrentID,title,description,

    })
    
  }
  return (
    <ScrollWrapper>
      <KeyboardAvoidingView
        keyboardVerticalOffset={isIos ? 100 : 0}
        behavior={isIos ? "padding" : "height"}
      >
        <TextInput
          label={"title"}
          keyboardType="default"
          keyboardAppearance="light"
          mode="outlined"
          style={styles.input}
          value={title}
          onChangeText={(text)=>setTitle(text)}
        />
        <TextInput
          label={"description"}
          keyboardType="default"
          keyboardAppearance="light"
          mode="outlined"
          multiline={true}
          numberOfLines={4}
          style={[styles.input, styles.multi]}
          value={description}
          onChangeText={(text)=>setDescription(text)}
        />

        <MultipleSelectList
          setSelected={onHandleSelectedType}
          data={data}
          save="value"
          placeholder="Select Medication Type"
          label="Medication Type"
          inputStyles={styles.selector}
          boxStyles={styles.box}
          badgeStyles={{ backgroundColor: colors.primary_10 }}
        />

        <SelectList
          setSelected={(val:any) => setSelectedTime(val)}
          data={time}
          save="value"
          search={false}
          placeholder="choose schedule"
          inputStyles={styles.selector}
          boxStyles={styles.box}
        />

        <Button
          mode="contained"
          style={styles.btnContained}
          labelStyle={styles.label}
          onPress={onHandleAdd}
        >
          create reminder
        </Button>
      </KeyboardAvoidingView>
    </ScrollWrapper>
  );
};

export default React.memo(Reminder);

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
    maxHeight: height * 0.65,
    minHeight: height * 0.65,
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
    marginVertical:8
  },
});
