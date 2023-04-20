import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Icons from "react-native-vector-icons/Feather";
import { Text, Title } from "react-native-paper";
import { roboto } from "../../../Globals/Fonts";

interface w {
  title: string;
  icon?: string | any;
  onPress?(): void | any;
}

export const Wrapper = (props: w) => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.5}>
      <View style={styles.wrap}>
        <Icons name={props.icon} size={20} color="#333" />
        <Title style={styles.txtWrap}>{props.title}</Title>
      </View>
    </TouchableOpacity>
  );
};

interface t {
  title: String;
}
export const TitleWrapper = (props: t) => {
  return (
    <View style={styles.tCon}>
      <Text style={styles.tit}>{props.title}</Text>
    </View>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 5,
  },
  txtWrap: {
    fontSize: 18,
    color: "rgba(0,0,0,0.7)",
    paddingHorizontal: 15,
    fontFamily:roboto.light,
    textTransform: "capitalize",
  },
  tit: {
    fontSize: 16,
    fontWeight: "200",
    textTransform: "capitalize",
  },
  tCon: {
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  div: {
    marginHorizontal: 10,
    marginVertical: 8,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
  },
  vs: {
    fontSize: 12,
    textAlign: "center",
    color: "rgba(0,0,0,0.3)",
  },
});
