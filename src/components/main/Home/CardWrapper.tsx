import { StyleSheet } from "react-native";
import React from "react";
import { Caption, Card } from "react-native-paper";

import { colors, rgba } from "../../../Globals/Colors";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type icon = {
  icon?: string | any;
  title?: string;
  onPress?():void;
};

const CardWrapper = (props: icon) => {
  return (
    <Card contentStyle={styles.con} style={styles.con} mode="contained" onPress={props.onPress}>
      <Card.Content style={styles.in}>
        <Icon name={props.icon} size={30} color={rgba.grey_5} />
        <Caption style={styles.cap}>{props.title}</Caption>
      </Card.Content>
    </Card>
  );
};

export default React.memo(CardWrapper);

const styles = StyleSheet.create({
  con: {
    backgroundColor: colors.primary_1,
    elevation: 0,
    maxWidth:120,
    minWidth:120,
    width:120,
    maxHeight:100,
    minHeight:100,
    height:100,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  },
  in:{
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center'
  },
  cap:{
    paddingVertical:6
  }
});
