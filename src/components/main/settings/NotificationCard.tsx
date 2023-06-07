import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../../../Globals/Colors";
import { Row } from "../../../screens/Main/Home/Ambulance";
import { Button, Caption, Paragraph, Text } from "react-native-paper";
import { roboto } from "../../../Globals/Fonts";
import { Divider } from "react-native-elements";
 import {db,auth} from "../../Auth/firebase"
 import {ref,child,update} from "firebase/database"
type card = {
  address: string;
  status: string;
  safety: string;
  description: string;
  accessibility: string;
  time: string;
  date: string;
  additional: string;
  NotK:string;
  onPress(event?: any): void;
};
const NotificationCard = (props: card) => {
  let date: Date = new Date();
  let time: string = date.toLocaleTimeString("en-SA", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    hourCycle: "h24",
  });
  let date_of_request: string = date.toLocaleDateString("en-SA", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  props.date = date_of_request;
  props.time = time;

  const updateAvailability = (NotK) => { 
    const MedicRef=ref(db,'MedicoRequest')
    const MedicoChild=child(MedicRef,NotK)
    update(MedicoChild,{status:'Cancelled'})
      
 
 
 }
  return (
    <View style={styles.con}>
      <Row>
        <Text style={styles.date}>
          {date_of_request} {time}
        </Text>
      </Row>
      <Divider orientation="horizontal" />
      {/* <Row style={styles.row}>
        <Text variant="titleSmall">Description</Text>
        <Paragraph numberOfLines={2} ellipsizeMode="tail" style={styles.desc}>
          {props.description}
        </Paragraph>
      </Row> */}
      <Row style={styles.row}>
        <Text variant="titleSmall">Address</Text>
        <Paragraph numberOfLines={1} ellipsizeMode="tail" style={styles.desc}>
          {props.address}
        </Paragraph>
      </Row>
      <Row style={styles.rowEnd}>
        <Text variant="titleSmall">Accessibility Info:</Text>
        <Caption>{props.accessibility}</Caption>
      </Row>
      <Row style={styles.rowEnd}>
        <Text variant="titleSmall">Safety Info:</Text>
        <Caption>{props.safety}</Caption>
      </Row>
      <Row style={styles.rowEnd}>
        <Text variant="titleSmall">Additional info:</Text>
        <Caption>{props.additional}</Caption>
      </Row>
      <Row style={styles.rowEnd}>
        <Text variant="titleSmall">Status:</Text>
        <Caption style={styles.status}>{props.status}</Caption>
      </Row>
      <Button
        mode="outlined"
        style={styles.btnOutline}
        labelStyle={styles.label}
        onPress={()=>updateAvailability(props.NotK)}
      >
        cancel
      </Button>
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  con: {
    backgroundColor: colors.primary_1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  date: {
    textAlign: "right",
    alignSelf: "flex-end",
    flex: 1,
  },
  row: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  desc: {
    fontFamily: roboto.light,
    fontSize: 12,
  },
  rowEnd: {
    justifyContent: "space-between",
  },
  status: {
    color: "green",
  },
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
});
