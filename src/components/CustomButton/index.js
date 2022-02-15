import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

const CustomButton = ({ onPress, children, style }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <View style={{ ...styles.container, ...style }}>
        <Text style={styles.buttonTitle}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
