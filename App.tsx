import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Navigator from "./routes/Drawer";
const getFonts = () =>
  Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf")
  });
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (fontLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontLoaded(true)} />
    );
  }
}
