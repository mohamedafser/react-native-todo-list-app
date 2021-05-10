import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Header from "../components/Header";
import TodoItem from "../components/TodoItem";
import AddTodo from "../components/AddTodo";
const TodoList = () => {
  const [todos, setTodos] = useState<any>([
    { text: "buy coffee", key: "1" },
    { text: "buy a cup of tea", key: "2" },
    { text: "create new app", key: "3" },
    { text: "make an inji tea", key: "4" }
  ]);
  const handleDeleteTodoItem = (key: any) => {
    setTodos((prevTodos: any) => {
      return prevTodos.filter((item: any) => item.key != key);
    });
  };
  const handleCreateTodoItem = (text: any) => {
    if (text.length > 3) {
      setTodos((prevTodos: any) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Oops!", "Todos must be over 3 chars long", [
        { text: "understood", onPress: () => console.log("alret Closed") }
      ]);
    }
  };
  const handlecloseKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={handlecloseKeyboard}>
      <View style={styles.container}>
        {/* <Header /> */}
        <View style={styles.content}>
          <AddTodo handleSumbit={handleCreateTodoItem} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }: any) => (
                <TodoItem item={item} handlePress={handleDeleteTodoItem} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  },
  listItems: {}
});
