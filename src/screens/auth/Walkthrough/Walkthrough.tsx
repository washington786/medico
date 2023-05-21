import React from 'react'
import MainView from '../../../Globals/MainView'
import WalkthroughWrapper from './WalkthroughWrapper'

const Walkthrough = () => {
  return (
    <MainView>
       <WalkthroughWrapper/>
    </MainView>
  )
}

export default React.memo(Walkthrough)