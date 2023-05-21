import { FlatList, Image, StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import HistoryCard from "./HistoryCard";

const HistoryList = () => {
  return (
    <FlatList
      data={[]}
      keyExtractor={(item) => item.id.toString()}
      renderItem={(item) => {
        const {
          accessibility,
          additional,
          address,
          date,
          description,
          safety,
          status,
          time,
        } = item.item;
        return (
          <HistoryCard
            accessibility={accessibility}
            additional={additional}
            address={address}
            date={date}
            description={description}
            safety={safety}
            status={status}
            time={time}
          />
        );
      }}
      style={{ flexGrow: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<Empty />}
    />
  );
};

const Empty = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image
        source={require("../../../assets/empty.png")}
        style={{ width: "100%", resizeMode: "contain" }}
      />
      <Text variant="labelMedium" style={{ marginTop: -200, color: "red" }}>
        your history is currently empty!
      </Text>
    </View>
  );
};

export default React.memo(HistoryList);

const styles = StyleSheet.create({
  con: {
    backgroundColor: "white",
    flexGrow: 1,
    flex: 1,
    paddingBottom: 10,
  },
});
