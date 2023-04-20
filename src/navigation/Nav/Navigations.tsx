import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import Auth from '../stacks/Auth';
import BottomNavigation from '../bottom/BottomNavigation';

const Navigations = () => {
  return (
    <NavigationContainer>
        {/* <Auth/> */}
        <BottomNavigation/>
    </NavigationContainer>
  )
}

export default React.memo(Navigations);
