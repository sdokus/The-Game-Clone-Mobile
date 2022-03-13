import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import useCards from "../hooks/useCards";
import CardsInHand from "./CardsInHand";

export default function TheGame() {
  const { drawDeck, startGame, dealCards, cardsInHand } = useCards();

  useEffect(() => {
    startGame();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Draw Deck:</Text>
      <TouchableOpacity onPress={() => dealCards()} style={styles.button}>
        <Text style={styles.drawDeckStyle}>{drawDeck.length}</Text>
      </TouchableOpacity>

      {/* <SafeAreaView>
        {cardsInHand.map((card) => {
          return (
            <Text style={styles.drawDeckStyle} key={card.value}>
              {card.value}
            </Text>
          );
        })}
      </SafeAreaView> */}
      <CardsInHand cardsInHand={cardsInHand} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    width: 100,
    height: 150,
  },
  drawDeckStyle: {
    flex: 1,
    color: "#fff",
    fontSize: 30,
    backgroundColor: "green",
    height: 200,
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  cardsInHandStyle: {
    flex: 1,
    flexDirection: "row",
    color: "#fff",
    fontSize: 40,
    backgroundColor: "green",
    height: 130,
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
