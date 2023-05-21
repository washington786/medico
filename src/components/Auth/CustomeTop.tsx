import { StyleSheet, View } from "react-native";
import React from "react";
import { Caption, Text } from "react-native-paper";

type top={
  title:string;
  sub:string;
}
const CustomTop = (props:top) => {
  return (
    <View style={styles.con}>
      <Text variant="titleLarge">{props.title}</Text>
      <Caption>{props.sub}</Caption>
    </View>
  );
};

export default React.memo(CustomTop);

const styles = StyleSheet.create({
  con:{
    paddingVertical:10
  }
});
