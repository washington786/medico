import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'

const height = Dimensions.get('window').height;

interface l{
    children:any,
    style?:object,
}
const LoginBottomView = (props:l) => {
  return (
    <View style={[styles.con,props.style]}>
      {
        props.children
      }
    </View>
  )
}
 
export default React.memo(LoginBottomView)

const styles = StyleSheet.create({
    con:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        backgroundColor:'white',
        maxHeight: height*0.5,
        minHeight:height*0.5,
        borderTopEndRadius:20,
        borderTopStartRadius:20,
        padding:8
    }
})