import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CardWrapper from "./CardWrapper";
import HelpWrapper from "./HelpWrapper";
import { useNavigation } from "@react-navigation/native";

const InformationWrapper = () => {
  let title: string = "How can we help you today?";

  const navigation = useNavigation();

  const handleConsult=():void=>{
    navigation.navigate('consult');
  }
  const handleHospitals=():void=>{
    navigation.navigate('hospitals');
  }
  const handleAmbulance=():void=>{
    navigation.navigate('ambulance');
  }

  return (
    <>
      <HelpWrapper title={title} />
      <View style={styles.card}>
        <CardWrapper icon={"medical-bag"} title="Consult" onPress={handleConsult}/>
        <CardWrapper icon={"hospital-building"} title="Hospitals" onPress={handleHospitals}/>
        <CardWrapper icon={"ambulance"} title="Ambulance" onPress={handleAmbulance}/>
      </View>
    </>
  );
};

export default React.memo(InformationWrapper);

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 8,
  },
});
