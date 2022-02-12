import React from "react";
import { View, Text, TextInput, Button } from "react-native";

import styles from "./styles";
import Cards from "../../components/Cards";

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start a New Game</Text>

      <Cards>
        <View style={styles.inputContainer}>
          <Text>Select A Number</Text>
          <TextInput style={styles.input} />
          <View style={styles.buttons}>
            <Button title="Reset" />
            <Button title="Confirm" />
          </View>
        </View>
      </Cards>
    </View>
  );
};

export default StartGameScreen;
