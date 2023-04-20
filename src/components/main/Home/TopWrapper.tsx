import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';
import { colors } from '../../../Globals/Colors';

const TopWrapper = () => {
  return (
    <View style={styles.con}>
      <Avatar.Icon icon={'account'} size={50} color={'#fff'} style={styles.iconBg}/>
    </View>
  )
}

export default React.memo(TopWrapper);

const styles = StyleSheet.create({
    con:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        paddingVertical:8
    },
    iconBg:{
        backgroundColor: colors.primary_6
    }
})