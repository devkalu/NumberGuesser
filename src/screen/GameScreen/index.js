import React, { useState, useRef, useEffect } from "react";
import { View, Text, Button, Alert, ScrollView, FlatList } from "react-native";

import NumberContainer from "../../components/NumberContainer";
import Cards from "../../components/Cards";
import styles from "./styles";
import TitleText from "../../components/TitleText";
import BodyText from "../../components/BodyText";

const generateRandom = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randNum = Math.floor(Math.random() * (max - min) + min);
  if (randNum === exclude) {
    return generateRandom(min, max, exclude);
  } else {
    return randNum;
  }
};

const renderList = (listLength, itemData) => {
  return (
    <View style={styles.listItem}>
      <BodyText>#{listLength - itemData.index}</BodyText>
      <BodyText>{itemData.item}</BodyText>
    </View>
  );
};

const GameScreen = ({ userChoice, onGameOver }) => {
  const intialGuess = generateRandom(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(intialGuess);
  const [pastGuesses, setPastGuesses] = useState([intialGuess.toString()]);
  const currentHigh = useRef(100);
  const currentLow = useRef(1);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "higher" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know your hint wasnt helpful.", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandom(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    setCurrentGuess(nextNumber);
    // setRounds((currentRounds) => currentRounds + 1);
    setPastGuesses((currentPastGuess) => [
      nextNumber.toString(),
      ...currentPastGuess,
    ]);
  };
  return (
    <View style={styles.container}>
      <TitleText>Opponent's Guess</TitleText>
      <NumberContainer number={currentGuess} />
      <Cards style={styles.buttons}>
        <Button
          title="Lower"
          onPress={() => {
            nextGuessHandler("lower");
          }}
        />
        <Button
          title="Greater"
          onPress={() => {
            nextGuessHandler("higher");
          }}
        />
      </Cards>
      <View style={styles.listContainer}>
        {/* style doesn't work properly in ScrollView */}
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((item, index) =>
            renderList(pastGuesses.length - index, item)
          )}
        </ScrollView> */}
        <FlatList
          keyExtractor={(item) => item}
          data={pastGuesses}
          renderItem={renderList.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

export default GameScreen;
