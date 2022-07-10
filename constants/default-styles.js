import { StyleSheet } from "react-native";
import Colors from "./colors";

export default StyleSheet.create({
  bodyText: {
    fontFamily: "open-sans-bold",
    color: "white",
    fontSize:18
  },
  title: {
    fontSize: 25,
    marginVertical: 10,
    color: Colors.orange,
    textDecorationLine: "underline",
    fontFamily: "open-sans-bold",
    marginVertical: 40,
  },
});
