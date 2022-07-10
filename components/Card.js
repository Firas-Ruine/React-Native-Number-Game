import React from "react";
import { View, StyleSheet } from "react-native";
import  Colors from "../constants/colors";
const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "white",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: Colors.primary,
    elevation: 5,
    padding: 20,
    borderRadius: 10,
    borderWidth:3,
    borderColor:Colors.orange
  },
});
export default Card;
