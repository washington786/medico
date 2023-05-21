import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";
import { roboto } from "../../Globals/Fonts";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../Globals/Colors";

const isIos = Platform.OS === "ios";

const HeaderBack = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.con}>
      <IconButton
        icon={isIos?"chevron-left":'arrow-left'}
        size={isIos?40:35}
        onPress={goBack}
        iconColor={colors.primary_10}
      />
      {isIos && <Text style={styles.txt}>Go back</Text>}
    </View>
  );
};

export default HeaderBack;

const styles = StyleSheet.create({
  con: {
    flexDirection: "row",
    alignItems: "center",
  },
  txt: {
    fontFamily: roboto.regular,
    marginLeft: -17,
    color: colors.primary_10,
    marginRight:5
  },
});
