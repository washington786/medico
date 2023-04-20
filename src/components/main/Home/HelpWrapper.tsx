import { StyleSheet, View } from "react-native";
import React from "react";
import { Title } from "react-native-paper";
import { roboto } from "../../../Globals/Fonts";

type title={
  title:string
}
const HelpWrapper = (props:title) => {
  return (
    <View style={styles.con}>
      <Title style={styles.tit}>{props.title}</Title>
    </View>
  );
};

export default React.memo(HelpWrapper);

const styles = StyleSheet.create({
  con: {
    marginVertical: 10,
  },
  tit: {
    fontFamily: roboto.medium,
    fontSize: 16,
  },
  card: {
    flexDirection: "row",
    justifyContent:'space-around',
    marginVertical:8
  },
});
