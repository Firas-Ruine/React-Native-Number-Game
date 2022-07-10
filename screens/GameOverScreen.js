import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";
const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      
      <View style={styles.imageContainer}>
        <Image
        fadeDuration={1000}
          //source={require("../assets/gameover.jpg")}
          source={{uri:'https://img.freepik.com/free-vector/glitch-game-background_23-2148085610.jpg?w=2000'}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.text2}>Your phone needed <Text style={styles.roundText}>{props.roundsNumber}</Text> roundes to guess the number <Text style={styles.roundText}>{props.userNumber}</Text> </Text>
      
      <MainButton
        onPress={props.onRestart}
      >NEW GAME</MainButton>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  text: {
    color: "red",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 25,
  },
  text2: {
    color: "white",
    fontSize: 16,
    textAlign:'center',
    marginVertical: 30,
    width:'65%'
  },
  imageContainer: {
    width: "80%",
    height: 300,
    borderRadius: 200,
    borderWidth: 5,
    borderColor: Colors.orange,
    overflow:'hidden',
    marginVertical:15 
  },
  image: {
    width: '100%',
    height: '100%',
  },
  roundText:
  {
    color:Colors.orange,
    fontFamily:'open-sans-bold',
    fontSize:18
  }
});
export default GameOverScreen;
