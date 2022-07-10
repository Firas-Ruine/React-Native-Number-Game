import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/colors";
const StartGameButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    button:
    {
        backgroundColor:Colors.orange,
        paddingVertical:12,
        paddingHorizontal:10,
        alignItems:'center',
        borderRadius:10
    },
    buttonText:
    {
       color:'white',
       fontFamily:'open-sans',
       fontSize:16

    }
});
export default StartGameButton;
