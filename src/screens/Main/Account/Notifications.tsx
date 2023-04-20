import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScrollWrapper from '../../../Globals/ScrollWrapper'
import MainWrapperView from '../../../components/main/MainWrapperView'
import HeaderBack from '../../../components/main/settings/HeaderBack'

const Notifications = () => {
  return (
    <ScrollWrapper>
      <MainWrapperView>
        <HeaderBack/>
      </MainWrapperView>
    </ScrollWrapper>
  )
}

export default Notifications

const styles = StyleSheet.create({})