import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

const Cards = ({ children, style }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

export default Cards;
