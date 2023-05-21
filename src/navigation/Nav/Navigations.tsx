import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from '../stacks/MainStack';

const Navigations = () => {
  return (
    <NavigationContainer>
        <MainStack/>
    </NavigationContainer>
  )
}

export default React.memo(Navigations);
