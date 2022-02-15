import React from "react";
import { Text } from "react-native";
import styles from "./styles";

const TitleText = ({ children, style }) => {
  return <Text style={{ ...styles.titleText, ...style }}>{children}</Text>;
};

export default TitleText;
