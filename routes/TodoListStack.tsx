import React from "react";
import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from "react-navigation";
import TodoList from "../screens/TodoList";
import Header from "../default/Header";
const screens = {
  TodoList: {
    screen: TodoList,
    navigationOptions: ({ navigation }: any) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Todo list" />
      };
    }
  }
};

// home stack navigator screens
const TodoListStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "#ddd", height: 80 },
    headerTitleAlign: "center"
  }
});

export default TodoListStack;
