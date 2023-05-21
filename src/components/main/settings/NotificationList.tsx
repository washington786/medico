import { FlatList, Image, StyleSheet, View } from "react-native";
import React from "react";
import { notifications } from "../../../data/Notifications";
import NotificationCard from "./NotificationCard";
import { Text } from "react-native-paper";
import { colors } from "../../../Globals/Colors";

type list = {
  onPress(): void;
};

const NotificationList = (props: list) => {
  return (
    <View style={styles.con}>
      <FlatList
        data={notifications}
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
            <NotificationCard
              accessibility={accessibility}
              additional={additional}
              address={address}
              date={date}
              description={description}
              safety={safety}
              status={status}
              time={time}
              onPress={props.onPress}
            />
          );
        }}
        style={{ flexGrow: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Empty />}
      />
    </View>
  );
};

const Empty = () => {
  return (
    <View style={{alignItems:"center", justifyContent:"center"}}>
      <Image
        source={require("../../../assets/notification.png")}
        style={{ width:"100%",resizeMode:"contain"}}
      />
      <Text variant="labelMedium" style={{marginTop:-200, color:colors.primary_7}}>You don't have any notifications yet.</Text>
    </View>
  );
};

export default React.memo(NotificationList);

const styles = StyleSheet.create({
  con: {
    backgroundColor: "white",
    flexGrow: 1,
    flex: 1,
    paddingBottom: 10,
  },
});
