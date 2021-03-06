import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Input = props => {
  return (
    <TextInput {...props} style={{...styles.input, ...props.style}} />
  )
}
const styles = StyleSheet.create({
    input:
    {
        height:30,
        borderBottomColor: 'white',
        borderBottomWidth:1,
        marginBottom:30,
        marginTop:10,
        color : 'white'
    }
})
export default Input