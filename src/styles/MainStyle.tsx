import { StyleSheet} from 'react-native'
import { colors } from '../Globals/Colors'

export const MainStyle = StyleSheet.create({
    activity:{
        alignSelf:'center'
    },
    buttonGlobal:{
        backgroundColor:colors.primary_10,
        padding:5,
        borderRadius:0
    },
    label:{
        fontSize:18,
        textTransform:"uppercase"
    },
    btn:{
        marginVertical:15,
        borderRadius:2
    }
})