import React from "react";
import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../default/Header";
const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }: any) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Home" />
      };
    }
  },
  ReviewDetails: {
    screen: ReviewDetails
  }
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#ddd",
      height: 80
    },
    headerTitleAlign: "center"
  }
});

export default HomeStack;
