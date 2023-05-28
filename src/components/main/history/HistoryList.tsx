import { FlatList, Image, StyleSheet, View } from "react-native";
import React,{useState,useEffect} from "react";
import { Text } from "react-native-paper";
import HistoryCard from "./HistoryCard";
import { db,auth } from "../../Auth/firebase";
import { ref ,onValue} from "firebase/database";
const HistoryList = () => {
  const CurrentID = auth.currentUser?.uid;
  const [StudHistory, setStudHistory] = useState([])
  
  useEffect(() => {
   const StudentRef= ref(db,'/MedicoRequest')
   onValue(StudentRef, snap => {

        const StudHistory = []
        snap.forEach(action => {
            const key = action.key
            const data = action.val()
            StudHistory.push({
                key:key,
                Firstname:data.Firstname,address:data.fullAddress,
                uid:data.uid,status:data.Status,
                accessibility:data.accessibility,
                safety:data.safety,additional:data.addons,
              user:data.user
            })
            
            const text=CurrentID
            if(text){
             const newData = StudHistory.filter(function(item){
                 const itemData = item.user ? item.user
                 :'';
                 const textData = text;
                 return itemData.indexOf( textData)>-1;
 
             })
             setStudHistory(newData)
            
           }


        })
    })
 
}, [])
  return (
    <FlatList
      data={StudHistory}
      keyExtractor={(item) => item.key}
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
