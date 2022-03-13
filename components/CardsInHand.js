import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
// import useCards from "../hooks/useCards";

// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "First Item",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     title: "Second Item",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Third Item",
//   },
//   {
//     id: "3",
//     title: "Fourth Item",
//   },
//   {
//     id: "4",
//     title: "Fifth Item",
//   },
// ];

//functional component that renders each item in the list:
const Item = ({ value }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{value}</Text>
  </View>
);

const CardsInHand = (props) => {
  const renderItem = ({ item }) => <Item card={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.cardsInHand}
        renderItem={renderItem}
        keyExtractor={(item) => item.value}
        horizontal={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    width: 100,
    height: 150,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    flex: 1,
    color: "#fff",
    fontSize: 20,
    backgroundColor: "pink",
    height: 80,
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CardsInHand;
