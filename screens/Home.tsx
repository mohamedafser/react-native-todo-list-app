import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import Card from "../default/Card";
import { MaterialIcons } from "@expo/vector-icons";
import AddNewReview from "./AddNewReview";
const Home = ({ navigation }: any) => {
  const [reviews, setReviews] = useState([
    { name: "Name one", rating: 5, body: "lorem epsum", key: "1" },
    { name: "Name two", rating: 4, body: "lorem epsum", key: "2" },
    { name: "Name three", rating: 3, body: "lorem epsum", key: "3" }
  ]);
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<any>({
    name: "",
    body: "",
    rating: 0,
    key: ""
  });
  // const handleReviewButton = () => {
  //   // Both are doing the same thing
  //   // navigation.navigate("ReviewDetails");
  //   navigation.push("ReviewDetails");
  // };
  // const handleReviewDatas = (value: any) => {
  //   console.log("item", value);
  // };
  const handleModelOpen = () => {
    setModelOpen((prevState: any) => !prevState);
  };

  const handlecloseKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={handlecloseKeyboard}>
      <View style={globalStyles.container}>
        {/* <Text style={globalStyles.titleText}>Home Screen</Text> */}
        {/* <Button title="Go to review" onPress={handleReviewButton} /> */}
        <AddNewReview
          modelOpen={modelOpen}
          setModelOpen={setModelOpen}
          inputValue={inputValue}
          setInputValue={setInputValue}
          setReviews={setReviews}
        />
        <MaterialIcons
          name="add"
          size={24}
          color="#333"
          style={styles.modelToggle}
          onPress={handleModelOpen}
        />
        <FlatList
          // keyExtractor={(item: any) => item.key}
          data={reviews}
          renderItem={({ item }: any) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("ReviewDetails", item)}
            >
              <Card>
                <Text style={globalStyles.titleText}>{item.name}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
export default Home;

const styles = StyleSheet.create({
  modelToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center"
  }
});
