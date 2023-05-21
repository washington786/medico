import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors, rgba } from "../../../Globals/Colors";
import { Caption, Text } from "react-native-paper";

import Icons from "react-native-vector-icons/Feather";
import { Divider } from "react-native-elements";

type i = {
  title: string;
  isActive: boolean;
  steps: string[];
  onPress(id: number): void;
  id: number;
};

const InstructionsCard = (props: i) => {
  return (
    <View style={styles.con} key={props.id}>
      <Text variant="titleMedium">{props.title}</Text>
      <Divider orientation="horizontal" />
      <Caption>Steps:</Caption>
      <TouchableOpacity
        style={{ alignItems: "flex-end", justifyContent: "flex-end" }}
        onPress={props.onPress.bind(this,props.id)}
      >
        <Icons
          name={props.isActive ? "chevron-down" : "chevron-up"}
          size={25}
          color={rgba.grey_6}
        />
      </TouchableOpacity>
      {props.isActive && <Points steps={props.steps} />}
    </View>
  );
};

type p = {
  steps: string[];
};
const Points = (props: p) => {
  return (
    <>
      {props.steps.map((step, index) => {
        return <Caption key={index}>• {step}</Caption>;
      })}
    </>
  );
};
export default React.memo(InstructionsCard);

const styles = StyleSheet.create({
  con: {
    marginHorizontal: 8,
    marginVertical: 9,
    backgroundColor: colors.primary_1,
    paddingHorizontal: 5,
    paddingVertical: 6,
  },
});
