import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      {/* GUESS */}
      <View>
        <Text>Higher or Lower</Text>
        {/* + - */}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
