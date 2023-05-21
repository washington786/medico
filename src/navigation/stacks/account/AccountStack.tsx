import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../../../screens/Main/Account/Account';
import TermsOfUse from '../../../screens/Main/Account/TermsOfUse';
import HelpCenter from '../../../screens/Main/Account/HelpCenter';
import Notifications from '../../../screens/Main/Account/Notifications';
import Profile from '../../../screens/Main/Account/Profile';
import PrivacyPolicy from '../../../screens/Main/Account/PrivacyPolicy';
import Reminder from '../../../screens/Main/Account/Reminder';
const AccountStacks = createStackNavigator();
const AccountStack = () => {
  return (
    <AccountStacks.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName='account'>
        <AccountStacks.Screen name='account' component={Account}/>
        <AccountStacks.Screen name='reminder' component={Reminder}/>
        <AccountStacks.Screen name='profile' component={Profile}/>
        <AccountStacks.Screen name='notifications' component={Notifications}/>
        <AccountStacks.Screen name='help' component={HelpCenter}/>
        <AccountStacks.Screen name='terms' component={TermsOfUse}/>
        <AccountStacks.Screen name='privacy' component={PrivacyPolicy}/>
    </AccountStacks.Navigator>
  )
}

export default AccountStack