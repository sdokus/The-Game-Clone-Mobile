import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

function Instructions() {
  return (
    <View style={{ padding: 10 }}>
      <TouchableOpacity
        onPress={() =>
          alert(
            "Move all the cards from the draw deck into the four piles. Two of the piles are going down from 100 and two are going up from 1. You can bump a card back/forward if the value is exactly 10 less/more than the card currently on the top of that pile. You have to play at least two cards before redealing your hand back to 8 cards. Try to get as many cards as possible out of the draw deck to beat your best score!"
          )
        }
        style={styles.button}
      >
        <Text style={styles.buttonText}>Instructions</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 15,
    color: "#fff",
  },
});

export default Instructions;
