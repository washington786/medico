import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../../../Globals/Colors";
import MainView from "../../../Globals/MainView";
import { Text } from "react-native-paper";
import HistoryList from "../../../components/main/history/HistoryList";

const History = () => {
  return (
    <MainView>
      <Header title={"History"} />
      <HistoryList />
    </MainView>
  );
};

type h = {
  title: any;
};

export const Header = (props: h) => {
  return (
    <View style={styles.h}>
      <Text variant="titleLarge" style={styles.title}>
        {props.title}
      </Text>
    </View>
  );
};
export default React.memo(History);

const styles = StyleSheet.create({
  h: {
    backgroundColor: colors.primary_10,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
  },
});
