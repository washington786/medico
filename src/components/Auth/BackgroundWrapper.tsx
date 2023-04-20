import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../Globals/Colors";

interface bg {
  url: string;
  children: any;
}
export const BackgroundWrapper = (props: bg) => {
  return (
    <ImageBackground
      source={{ uri: props.url }}
      resizeMode="cover"
      style={styles.bg}
    >
      <LinearGradient
        colors={[colors.primary_1, "transparent"]}
        style={[styles.bg, { zIndex: 100 }]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {props.children}
      </LinearGradient>
    </ImageBackground>
  );
};

export default BackgroundWrapper;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});
