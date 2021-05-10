import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

type Iprops = {
  handleSumbit: (data: any) => void;
};
const AddTodo = (props: Iprops) => {
  const { handleSumbit } = props;
  const [text, setText] = useState("");
  const handleChangeNewTodo = (value: any) => {
    setText(value);
  };
  const handlePressNewTodo = () => {
    handleSumbit(text);
    // setText('');
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={handleChangeNewTodo}
      />
      <Button onPress={handlePressNewTodo} title="Add New Todo" color="#333" />
    </View>
  );
};
export default AddTodo;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  }
});
