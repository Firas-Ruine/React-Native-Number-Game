import React from "react";
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView } from "react-native";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";
import {MaterialIcons} from '@expo/vector-icons'
const GameOverScreen = (props) => {
  return (
    <ScrollView style={styles.scroll}>
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
      >NEW GAME <MaterialIcons name="replay"  size={17} color="white" /></MainButton>
    </View>
    </ScrollView>
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
    width: Dimensions.get('window').width*0.7,
    height: Dimensions.get('window').width*0.7,
    borderRadius: Dimensions.get('window').width*0.7/2,
    borderWidth: 7,
    borderColor: Colors.orange,
    overflow:'hidden',
    marginVertical:Dimensions.get('window').height/40
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
  },
  scroll:
  {
    backgroundColor:Colors.primary
  }
 
});
export default GameOverScreen;
