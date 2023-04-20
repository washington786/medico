import { StyleSheet } from "react-native";
import React from "react";
import { ScrollView } from "react-native";

interface s {
  children: any;
}

const ScrollWrapper = (props: s) => {
  return (
    <ScrollView
      contentContainerStyle={styles.con}
      showsVerticalScrollIndicator={false}
      style={styles.in}
    >
      {props.children}
    </ScrollView>
  );
};

export default ScrollWrapper;

const styles = StyleSheet.create({
  con: {
    flexGrow: 1,
    paddingBottom: 30,
    backgroundColor:'white',
    flex:1
  },
  in:{
    flex:1
  }
});
