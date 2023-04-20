import { StyleSheet, View } from "react-native";
import React from "react";
import MainView from "../../../Globals/MainView";
import TopWrapper from "../../../components/main/Home/TopWrapper";
import MainWrapperView from "../../../components/main/MainWrapperView";
import NameWrapper from "../../../components/main/Home/NameWrapper";
import SearchWrapper from "../../../components/main/Home/SearchWrapper";
import PagerWrapper from "../../../components/main/Home/PagerWrapper";
import { pager_data } from "../../../data/carousel";
import InformationWrapper from "../../../components/main/Home/InformationWrapper";
import ReminderWrapper from "../../../components/main/Home/ReminderWrapper";
import Scroller from "../../../Globals/Scroller";

const Dashboard = () => {
  let name: string = "Daniel Mawasha";
  return (
    <MainView>
      <MainWrapperView>
        <TopWrapper />
        <NameWrapper name={`${name}`} />
        <SearchWrapper />
        <Scroller>
          <PagerWrapper data={pager_data} />
          <InformationWrapper />
          <ReminderWrapper />
          <Spacer />
        </Scroller>
        <Spacer />
      </MainWrapperView>
    </MainView>
  );
};

const Spacer = () => {
  return <View style={styles.spacer} />;
};
export default React.memo(Dashboard);

const styles = StyleSheet.create({
  spacer: {
    height: 160,
  },
});
