import React from "react";
import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from "react-navigation";
import About from "../screens/About";
import Header from "../default/Header";
const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }: any) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="About" />
      };
    }
  }
};

// home stack navigator screens
const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "#ddd", height: 80 },
    headerTitleAlign: "center"
  }
});

export default AboutStack;
