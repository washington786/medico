import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type s={
    children:any
}
const Scroller = (props:s) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.flex}>
      {props.children}
    </ScrollView>
  )
}

export default Scroller

const styles = StyleSheet.create({
    flex:{
        flexGrow:1,
        paddingBottom:50,
        backgroundColor:'white'
    }
})