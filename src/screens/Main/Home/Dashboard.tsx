import { StyleSheet, View } from "react-native";
import React ,{useEffect,useState}from "react";
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
import { db,auth } from "../../../components/Auth/firebase";
import { ref,onValue } from "firebase/database";
const Dashboard = () => {
  
  const user =auth.currentUser?.uid
  const [Firstname,setFirname]=useState('')
  const [Lastname,setLastname]=useState('')

  useEffect(() => {
    const StudentRef=ref(db,'/MedicoClient/' + user)
    onValue(StudentRef, snap => {
  
        setFirname(snap.val() && snap.val().Firstname);
        setLastname(snap.val() && snap.val().Lastname);
    }) 
  
  }, [])
  let name: string = 'Daniel';
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
