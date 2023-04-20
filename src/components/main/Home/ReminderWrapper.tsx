import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HelpWrapper from "./HelpWrapper";
import ReminderCard from "./ReminderCard";
import { useNavigation } from "@react-navigation/native";

const ReminderWrapper = () => {
  const navigation = useNavigation();

  let title: string = "Today's reminder";

  const handleTransits=()=>{
    navigation.navigate('details');
  }
  return (
    <>
      <HelpWrapper title={title} />
      <ReminderCard icon="pills" subtitle="please make sure to take your medications 3 times a day." title="Medication in-take Reminder" onPress={handleTransits}/>
      <ReminderCard icon="pills" subtitle="please make sure to take your medications 3 times a day." title="Medication in-take Reminder" onPress={handleTransits}/>
    </>
  );
};

export default React.memo(ReminderWrapper);

const styles = StyleSheet.create({});
