import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";

import Header from "./src/components/Header";
import StartGameScreen from "./src/screen/StartGameScreen";
import GameScreen from "./src/screen/GameScreen";
import GameOverScreen from "./src/screen/GameOverScreen";

import * as Font from "expo-font";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [finalRounds, setFinalRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const configureNewGameHandler = () => {
    setFinalRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setFinalRounds(0);
  };
  const gameOverHandler = (numRounds) => {
    setFinalRounds(numRounds);
  };
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && finalRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (finalRounds > 0) {
    content = (
      <GameOverScreen
        rounds={finalRounds}
        userNumber={userNumber}
        playAgain={configureNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Number Guesser" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
