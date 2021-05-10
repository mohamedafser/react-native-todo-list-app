import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
type Iprops = {
  item: any;
  handlePress: (key: any) => void;
};
const TodoItem = (props: Iprops) => {
  const { item, handlePress } = props;
  return (
    <TouchableOpacity onPress={() => handlePress(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color="#333" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default TodoItem;
const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row"
  },
  itemText: {
    marginLeft: 10
  }
});
