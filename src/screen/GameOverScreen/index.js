import React from "react";
import { View, Text, Button, Image } from "react-native";

import styles from "./styles";
import Cards from "../../components/Cards";
import NumberContainer from "../../components/NumberContainer";
import BodyText from "../../components/BodyText";
import TitleText from "../../components/TitleText";
import DefaultStyles from "../../constants/default-styles";
import CustomButton from "../../components/CustomButton";

const GameOverScreen = ({ rounds, userNumber, playAgain }) => {
  return (
    <View style={styles.container}>
      <Cards style={styles.card}>
        <Text style={{ ...styles.title, ...DefaultStyles.titleText }}>
          Game over
        </Text>
        <View style={styles.imageContainer}>
          <Image
            //fadeDuration={1000}
            source={require("../../../assets/images/success.png")}
            // source={{
            //   uri: "https://images.pexels.com/photos/4967858/pexels-photo-4967858.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-4967858.jpg&fm=jpg",
            // }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <BodyText style={styles.content}>Your Chosen Number was: </BodyText>
        <NumberContainer number={userNumber} />
        <BodyText style={styles.content}>
          The computer guessed your number in {rounds} Guesses{" "}
        </BodyText>
        <CustomButton onPress={playAgain}>Play Again</CustomButton>
      </Cards>
    </View>
  );
};

export default GameOverScreen;
