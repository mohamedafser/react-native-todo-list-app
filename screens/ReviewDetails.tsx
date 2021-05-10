import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles, ratingImages } from "../styles/globalStyles";
import Card from "../default/Card";
const ReviewDetails = ({ navigation }: any) => {
  return (
    <View style={globalStyles.container}>
      <Card>
        {/* <Text style={globalStyles.titleText}>ReviewDetails Screen</Text> */}
        <Text style={globalStyles.titleText}>
          {navigation.getParam("name")}
        </Text>
        <Text style={globalStyles.titleText}>
          {navigation.getParam("body")}
        </Text>
        <View style={styles.rating}>
          <Text>Rating : </Text>
          <Image source={ratingImages.rating[navigation.getParam("rating")]} />
        </View>
        {/* <Text style={globalStyles.titleText}>
          {navigation.getParam("rating")}
        </Text> */}
      </Card>
    </View>
  );
};
export default ReviewDetails;

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee"
  }
});
