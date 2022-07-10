import React from 'react'
import Colors from '../constants/colors'
import {View,Text,StyleSheet} from 'react-native'
import {Ionicons, Octicons} from '@expo/vector-icons'

const Header = props => {
  return (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>
            {props.title} <Octicons name="number" size={24} color="black" />
        </Text>
    </View>
  )
}
const styles = StyleSheet.create({
   header:
   {
    width:'100%',
    height:90,
    paddingTop:36,
    backgroundColor:Colors.orange,
    alignItems:'center',
    justifyContent:'center'
   },
   headerTitle:
   {
     color:Colors.primary,
     fontSize:25,
     fontFamily:'open-sans-bold'
   },
})
export default Header