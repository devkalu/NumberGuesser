import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import Header from "./src/components/Header";
import StartGameScreen from "./src/screen/StartGameScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Number Guesser" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
