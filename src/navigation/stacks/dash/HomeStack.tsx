import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../../../screens/Main/Home/Dashboard';
import Search from '../../../screens/Main/Home/Search';
import Hospitals from '../../../screens/Main/Home/Hospitals';
import Consult from '../../../screens/Main/Home/Consult';
import Ambulance from '../../../screens/Main/Home/Ambulance';
import ReminderDetails from '../../../screens/Main/Home/ReminderDetails';
const HomeStacks = createStackNavigator();
const HomeStack = () => {
  return (
    <HomeStacks.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName='dashboard'>
        <HomeStacks.Screen name='dashboard' component={Dashboard}/>
        <HomeStacks.Screen name='search' component={Search}/>
        <HomeStacks.Screen name='hospitals' component={Hospitals}/>
        <HomeStacks.Screen name='consult' component={Consult}/>
        <HomeStacks.Screen name='ambulance' component={Ambulance}/>
        <HomeStacks.Screen name='details' component={ReminderDetails}/>
    </HomeStacks.Navigator>
  )
}

export default HomeStack