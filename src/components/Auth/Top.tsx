import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, Title } from "react-native-paper";
import { colors } from "../../Globals/Colors";

interface t {
  title: string;
  subtitle: string;
}

export const Top = (props: t) => {
  return (
    <View style={styles.top}>
      <Title style={styles.title}>{props.title}</Title>
      <Text>{props.subtitle}</Text>
    </View>
  );
};

export default Top;

const styles = StyleSheet.create({
  title: {
    fontWeight: "500",
    color: colors.primary_10,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  top: {
    paddingHorizontal: 5,
    paddingVertical: 6,
  },
});
