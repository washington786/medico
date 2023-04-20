import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Walkthrough from '../../screens/Walkthrough/Walkthrough';
import ResetPassword from '../../screens/ResetPassword/ResetPassword';
import Register from '../../screens/Register/Register';
import Login from '../../screens/Login/Login';

const AuthStack = createStackNavigator();

const Auth = () => {
  return (
    <>
    <AuthStack.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName='walkthrough'>
        <AuthStack.Screen name='walkthrough' component={Walkthrough}/>
        <AuthStack.Screen name='login' component={Login}/>
        <AuthStack.Screen name='register' component={Register}/>
        <AuthStack.Screen name='reset' component={ResetPassword}/>
    </AuthStack.Navigator>
    </>
  )
}

export default React.memo(Auth)
