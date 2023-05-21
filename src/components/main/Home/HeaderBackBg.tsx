import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../../../Globals/Colors";
import { IconButton, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

type bck = {
  title?: string;
};
const HeaderBackBg = (props: bck) => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.con}>
      <IconButton
        icon={"arrow-left"}
        iconColor="white"
        onPress={handleBack}
        style={{ alignSelf: "flex-start" }}
      />
      <Text
        variant="titleMedium"
        style={{ color: "white", textAlign: "center",alignSelf:"center",flex:1 }}
      >
        {props.title}
      </Text>
    </View>
  );
};

export default HeaderBackBg;

const styles = StyleSheet.create({
  con: {
    backgroundColor: colors.primary_10,
    alignItems: "center",
    paddingVertical: 0,
    paddingHorizontal: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
