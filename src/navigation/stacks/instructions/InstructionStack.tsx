import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Info from '../../../screens/Main/Info/Info';
const InfoStacks = createStackNavigator();
const InstructionStack = () => {
  return (
    <InfoStacks.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName='instructions'>
        <InfoStacks.Screen name='instructions' component={Info}/>
    </InfoStacks.Navigator>
  )
}

export default InstructionStack