import React from "react";
import { Text, View, Button } from "react-native";

import styles from "./styles";
import CustomButton from "../../components/CustomButton";

import Cards from "../Cards";
import NumberContainer from "../NumberContainer";

const ConfirmCard = ({ selectedNumber, onStart }) => {
  return (
    <Cards style={styles.container}>
      <Text>You Selected</Text>
      <NumberContainer number={selectedNumber} />
      <CustomButton onPress={() => onStart(selectedNumber)}>
        Start Game
      </CustomButton>
    </Cards>
  );
};

export default ConfirmCard;
