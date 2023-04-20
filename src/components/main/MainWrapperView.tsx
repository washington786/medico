import { StyleSheet, View } from 'react-native'
import React from 'react'

type v={
    children:any
}
const MainWrapperView = (props:v) => {
  return (
    <View style={styles.con}>
      {
        props.children
      }
    </View>
  )
}

export default React.memo(MainWrapperView);

const styles = StyleSheet.create({
    con:{
        paddingHorizontal:10,
        flexGrow:1,
    }
})