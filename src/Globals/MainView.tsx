import { StyleSheet, View } from "react-native";
import React from "react";

interface view{
    children:any
}
const MainView = (props:view) => {
  return <View style={styles.flex}>{props.children}</View>;
};

export default MainView

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: "white",
    flexGrow:1
  },
});
