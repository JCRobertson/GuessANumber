import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import defaultStyles from "../constants/default-styles";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.title}>The Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={defaultStyles.bodyText}>
        Number of rounds: {props.rounds}
      </Text>
      <Text style={defaultStyles.bodyText}>Number was: {props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.newGameHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    width: 300,
    height: 300,
    overflow: 'hidden',
    margin: 30
  },
});

export default GameOverScreen;
