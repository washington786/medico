import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import Icons from "react-native-vector-icons/AntDesign";
import { colors, rgba } from "../../../Globals/Colors";
import { Title, Text as Texts, Button } from "react-native-paper";
import { color } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const WalkthroughWrapper = () => {
  return (
    <View style={styles.container}>
      <Top />
      <Middle />
      <Btns />
    </View>
  );
};

const Top = () => {
  return (
    <View style={styles.top}>
      <Icons name="medicinebox" size={30} color={colors.primary_10} />
      <Text style={styles.title}>MediCare</Text>
    </View>
  );
};

const Middle = () => {
  let title: string = "schedule appointments with ease";
  let sub: string =
    "get started, open your student account to enjoy the benefit of communicating with medical practitioners directly.";

  return (
    <View style={[styles.container, styles.mid]}>
      <Image
        source={require("../../../assets/undraw_doctor_kw5l.png")}
        style={styles.img}
      />
      <Title style={styles.main_title}>{title}</Title>
      <Texts style={styles.sub}>{sub}</Texts>
    </View>
  );
};

const Btns = () => {
  const navigation=useNavigation();

  const handleSignIn=():void=>{
    navigation.navigate('login')
  }

  const handleSignUp=():void=>{
    navigation.navigate('register')
  }

  return (
    <View style={styles.row}>
      <Button mode="outlined" style={styles.btn} contentStyle={styles.content_2}
        labelStyle={styles.label_2} onPress={handleSignUp}>
        create account
      </Button>
      <Button
        mode="contained-tonal"
        style={styles.btn}
        contentStyle={styles.content}
        labelStyle={styles.label}
        onPress={handleSignIn}
      >
        Sign in
      </Button>
    </View>
  );
};

export default React.memo(WalkthroughWrapper);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  top: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  title: {
    paddingHorizontal: 8,
    fontSize: 18,
    color: colors.primary_10,
  },
  mid: {
    justifyContent: "flex-start",
    flex: 1,
    marginTop: 40,
  },
  img: {
    height: 300,
    width: 300,
    resizeMode: "contain",
  },
  main_title: {
    color: colors.primary_8,
    textTransform: "capitalize",
  },
  sub: {
    fontSize: 12,
    color: rgba.grey_4,
    textAlign: "center",
    paddingVertical: 6,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position:'absolute',
    bottom:210
  },
  btn: {
    maxWidth: 180,
    minWidth: 180,
    marginHorizontal: 6,
  },
  label: {
    color: "white",
  },
  label_2: {
    color: rgba.grey_6,
  },
  content: {
    backgroundColor: colors.primary_8,
  },
  content_2: {
    // borderColor: colors.primary_6,
    // borderWidth:1
    
  },
});
