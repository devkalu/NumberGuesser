import React from "react";
import { View, TextInput, Button, Text } from "react-native";
import colors from "../../constants/colors";
import styles from "./styles";

const GameCard = ({
  onChangeText,
  value,
  resetInputHandler,
  confirmInputHandler,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.instruction}>
        Select a number between 1 - 99 (included){" "}
      </Text>
      <TextInput
        style={styles.input}
        blurOnSubmit
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="number-pad"
        maxLength={2}
        onChangeText={onChangeText}
        value={value}
      />
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title="Reset"
            onPress={resetInputHandler}
            color={colors.primary}
          />
        </View>
        <View style={styles.button}>
          <Button title="Confirm" onPress={confirmInputHandler} />
        </View>
      </View>
    </View>
  );
};

export default GameCard;
