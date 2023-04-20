import React from 'react'
import MainView from '../../Globals/MainView'
import ResetWrapper from './ResetWrapper'

const ResetPassword = () => {
  return (
    <MainView>
      <ResetWrapper />
    </MainView>
  )
}

export default React.memo(ResetPassword);