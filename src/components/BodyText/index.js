import React from "react";
import { Text } from "react-native";
import styles from "./styles";

const BodyText = ({ children, style }) => {
  return <Text style={{ ...styles.bodyText, ...style }}>{children}</Text>;
};

export default BodyText;
