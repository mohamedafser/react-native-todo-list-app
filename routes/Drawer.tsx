import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
import TodoListStack from "./TodoListStack";

const screens = {
  Home: {
    screen: HomeStack
  },
  About: {
    screen: AboutStack
  },
  TodoList: {
    screen: TodoListStack
  }
};
const RootDrawerNavigator = createDrawerNavigator(screens);
export default createAppContainer(RootDrawerNavigator);
