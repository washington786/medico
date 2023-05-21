import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import Icons from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/Ionicons";
import { Caption, Paragraph } from "react-native-paper";
import { colors, rgba } from "../../../Globals/Colors";
import { roboto } from "../../../Globals/Fonts";
import { useNavigation } from "@react-navigation/native";

const isIos = Platform.OS === "ios";

type back = {
  title?: string;
};
const HeaderBack = (props: back) => {
  return (
    <View style={styles.bg}>
      <IconWrapper />
      {!isIos && <Caption style={styles.headerText}>{props.title}</Caption>}
    </View>
  );
};

const IconWrapper = () => {
  const nav = useNavigation();
  const OnBack = () => {
    nav.goBack();
  };
  return (
    <TouchableOpacity onPress={OnBack} activeOpacity={0.5}>
      {isIos ? (
        <View style={styles.con}>
          <Icons name="chevron-left" size={30} color={colors.primary_10} />
          <Paragraph style={styles.txt}>Go back</Paragraph>
        </View>
      ) : (
        <Icon
          name="arrow-back"
          size={30}
          color={"rgba(0,0,0,0.6)"}
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
};

export default HeaderBack;

const styles = StyleSheet.create({
  con: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 7,
  },
  icon: {
    paddingVertical: 5,
  },
  bg: {
    paddingVertical: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  txt: {
    color: colors.primary_8,
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    color: rgba.grey_7,
    fontFamily: roboto.medium,
    fontSize:16
  },
});
