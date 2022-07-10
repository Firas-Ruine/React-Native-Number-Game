import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import StartGameButton from "../components/StartGameButton";
import Colors from "../constants/colors";
import defaultStyles from "../constants/default-styles";
const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return random;
  }
};

const renderListItem = (value, nbRounds) => (
  <View key={value} style={styles.listItem}>
      <Text style={defaultStyles.bodyText}>#{nbRounds}</Text>
      <Text style={defaultStyles.bodyText}>{value}</Text>
  </View>
);

const GameScreen = (props) => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentHGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  const currentLow = useRef(1);
  const currenthigh = useRef(100);
  const { userChoice, onGameOver } = props;
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);
  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong ...", [
        { text: "Sorry!", style: "cancel" },
      ]);

      return;
    }
    if (direction === "lower") {
      currenthigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currenthigh.current,
      currentGuess
    );
    setCurrentHGuess(nextNumber);
    setPastGuesses((curPastGuesses) => [nextNumber, ...curPastGuesses]);
  };
  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.title}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <StartGameButton onPress={nextGuessHandler.bind(this, "lower")}>
          {" "}
          Lower <Ionicons name="md-remove" size={20} color="white" />
        </StartGameButton>
        <StartGameButton onPress={nextGuessHandler.bind(this, "greater")}>
          Higher <Ionicons name="md-add" size={20} color="white" />
        </StartGameButton>
      </Card>
      <Text style={defaultStyles.title}>Computer Guess</Text>
      <View style={styles.list}>
      <ScrollView>
        {pastGuesses.map((guess,index) => renderListItem(guess,pastGuesses.length-index))}
      </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  buttonContainer: {
    flexDirection: "row",
    width: 300,
    maxWidth: "80%",
    justifyContent: "space-around",
    marginTop: 20,
  },
  listItem:
  {
    borderColor:Colors.orange,
    borderWidth:1,
    padding:15,
    marginVertical:10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  list:
  {
    width:'80%',
    flex:1
  }
});
export default GameScreen;
