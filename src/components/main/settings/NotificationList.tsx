import { FlatList, Image, StyleSheet, View } from "react-native";
import React,{useState,useEffect} from "react";
import { notifications } from "../../../data/Notifications";
import NotificationCard from "./NotificationCard";
import { Text } from "react-native-paper";
import { colors } from "../../../Globals/Colors";
import {auth,db} from '../../Auth/firebase'
import {ref,onValue} from 'firebase/database'
type list = {
  onPress(): void;
};

const NotificationList = (props: list) => {
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
    <View style={styles.con}>
      <FlatList
        data={StudHistory}
        keyExtractor={(item) => item.key.toString()}
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
