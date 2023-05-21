import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Walkthrough from '../../screens/auth/Walkthrough/Walkthrough';
import ResetPassword from '../../screens/auth/ResetPassword/ResetPassword';
import Register from '../../screens/auth/Register/Register';
import Login from '../../screens/auth/Login/Login';
import StudentDetails from '../../screens/auth/studentDetails/StudentDetails';
import GuardianDetails from '../../screens/auth/Guardian/GuardianDetails';

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
        <AuthStack.Screen name='studentDetails' component={StudentDetails}/>
        <AuthStack.Screen name='guardian' component={GuardianDetails}/>
    </AuthStack.Navigator>
    </>
  )
}

export default React.memo(Auth)
