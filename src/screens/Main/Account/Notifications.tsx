import { StyleSheet, View } from "react-native";
import React from "react";
import ScrollWrapper from "../../../Globals/ScrollWrapper";
import MainWrapperView from "../../../components/main/MainWrapperView";
import HeaderBack from "../../../components/main/settings/HeaderBack";
import NotificationList from "../../../components/main/settings/NotificationList";
import Scroller from "../../../Globals/Scroller";
import { Button, Dialog, Portal, Provider, Text } from "react-native-paper";

const Notifications = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  return (
    <Provider>
      <MainWrapperView>
        <HeaderBack />
        <NotificationList onPress={showDialog} />

        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title style={{ color: "red" }}>Cancel Request</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">
                Sorry, please note this will cancel the request for this ticket
                of the ambulance
              </Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>cancel</Button>
              <Button
                mode="contained-tonal"
                onPress={hideDialog}
                buttonColor="red"
                labelStyle={styles.lbl}
              >
                proceed
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </MainWrapperView>
    </Provider>
  );
};

export const BottomView = () => {
  return <View style={styles.con} />;
};
export default React.memo(Notifications);

const styles = StyleSheet.create({
  con: {
    paddingBottom: 20,
  },
  lbl: {
    color: "white",
  },
});
