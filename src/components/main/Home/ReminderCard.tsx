import { Platform, StyleSheet, View } from "react-native";
import React from "react";
import { colors, rgba } from "../../../Globals/Colors";
import { Caption, Card, Paragraph, Text, Title } from "react-native-paper";

import Icons from "react-native-vector-icons/Fontisto";
import Icon from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";

const isIos = Platform.OS === "ios";

type reminder={
    title:string;
    subtitle:string;
    icon:string;
    onPress?():void;
} 

const ReminderCard = (props:reminder) => {
  return (
   <TouchableOpacity style={styles.con} onPress={props.onPress}>
        <View style={styles.icon}>
            <Icons name={props.icon} size={25} color={rgba.grey_3}/>
        </View>
        <View style={styles.content}>
            <Text numberOfLines={1}>{props.title}</Text>
            <Caption numberOfLines={1}>{props.subtitle}</Caption>
        </View>
        <View style={styles.icon}>
            <Icon name="chevron-right" size={25} color={rgba.grey_3}/>
        </View>
   </TouchableOpacity>
  );
};

export default ReminderCard;

const styles = StyleSheet.create({
  con: {
    backgroundColor: colors.primary_1,
    elevation: 0,
    borderRadius: 5,
    height: isIos ? 80 : 70,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection:'row',
    paddingHorizontal:10,
    marginVertical:8
  },
  content: {
    flex:1,
    paddingHorizontal:8
  },
  icon: {
    paddingHorizontal:5
  },
  conWrap: {
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
  },
  info:{
    flex:1
  },

});
