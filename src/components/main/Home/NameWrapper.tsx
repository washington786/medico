import { StyleSheet } from "react-native";
import React from "react";
import { Title } from "react-native-paper";
import { roboto } from "../../../Globals/Fonts";
import { colors } from "../../../Globals/Colors";

type name = {
  name: string;
};

const NameWrapper = (props: name) => {
  return (
    <>
      <Title style={styles.name}>Hello, {props.name}!</Title>
    </>
  );
};

export default React.memo(NameWrapper);

const styles = StyleSheet.create({
  name: {
    fontSize: 22,
    textTransform: "capitalize",
    color: colors.primary_4,
    fontFamily: `${roboto.medium}`,
  },
});
