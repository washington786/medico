import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import Auth from '../stacks/Auth';
import BottomNavigation from '../bottom/BottomNavigation';
import MainStack from '../stacks/MainStack';

const Navigations = () => {
  return (
    <NavigationContainer>
        {/* <Auth/>
        <BottomNavigation/> */}
        <MainStack/>
    </NavigationContainer>
  )
}

export default React.memo(Navigations);
