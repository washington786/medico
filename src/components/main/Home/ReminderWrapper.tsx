import { StyleSheet, Text, View,FlatList } from "react-native";
import React ,{useState,useEffect}from "react";
import HelpWrapper from "./HelpWrapper";
import ReminderCard from "./ReminderCard";
import { useNavigation } from "@react-navigation/native";
import { db,auth } from "../../Auth/firebase";
import { ref,onValue } from "firebase/database";
const ReminderWrapper = () => {
  const navigation = useNavigation();

  let title: string = "Today's reminder";
  const CurrentID = auth.currentUser?.uid;
  const [StudHistory, setStudHistory] = useState([])
  
  useEffect(() => {
   const StudentRef= ref(db,'/MedicoReminder')
   onValue(StudentRef, snap => {

        const StudHistory = []
        snap.forEach(action => {
            const key = action.key
            const data = action.val()
            StudHistory.push({
                key:key,
                description:data.description,selected:data.selected,
                CurrentID:data.CurrentID,title:data.title,
                selectedTime:data.selectedTime,
       
              
            })
            
            const text=CurrentID
            if(text){
             const newData = StudHistory.filter(function(item){
                 const itemData = item.CurrentID ? item.CurrentID
                 :'';
                 const textData = text;
                 return itemData.indexOf( textData)>-1;
 
             })
             setStudHistory(newData)
            
           }


        })
    })
 
}, [])
  const handleTransits=()=>{
    navigation.navigate('details');
  }
  return (
    <>
      <HelpWrapper title={title} />
      <FlatList
      data={StudHistory}
      keyExtractor={(item) => item.key}
      renderItem={(item) => {
        const {
          description,selected,
                CurrentID,title,
                selectedTime,
         
        } = item.item;
        return (
          
          <ReminderCard icon="pills" subtitle={description} title={" Reminder Time:" + selectedTime} 
          selected={selected}
          onPress={handleTransits}/>
        );
      }}
      style={{ flexGrow: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
   
    />
  
    
      {/* <ReminderCard icon="pills" subtitle="please make sure to take your medications 3 times a day." title="Medication in-take Reminder" onPress={handleTransits}/> */}
    </>
  );
};

export default React.memo(ReminderWrapper);

const styles = StyleSheet.create({});
