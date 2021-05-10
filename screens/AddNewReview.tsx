import React, { useState } from "react";
import { StyleSheet, View, Modal, Text, TextInput, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
type Iprops = {
  modelOpen: boolean;
  setModelOpen: React.Dispatch<any>;
  inputValue: any;
  setInputValue: React.Dispatch<any>;
  setReviews: React.Dispatch<any>;
};
const AddNewReview = (props: Iprops) => {
  const {
    modelOpen,
    setModelOpen,
    inputValue,
    setInputValue,
    setReviews
  } = props;
  const handleTitle = (value: any) => {
    setInputValue((prevState: any) => {
      return { ...prevState, name: value };
    });
  };
  const handleDesc = (value: any) => {
    setInputValue((prevState: any) => {
      return { ...prevState, body: value };
    });
  };
  const handleReview = (value: any) => {
    setInputValue((prevState: any) => {
      return { ...prevState, rating: value };
    });
  };
  const handleModelClose = () => {
    setModelOpen((prevState: any) => !prevState);
  };
  const handleSubmit = () => {
    setReviews((prevState: any) => {
      return [...prevState, { ...inputValue, key: Math.random().toString() }];
    });
    handleModelClose();
  };
  return (
    <Modal visible={modelOpen} animationType="slide">
      <MaterialIcons
        name="close"
        size={24}
        color="#333"
        style={{ ...styles.modelToggle, ...styles.modelClose }}
        onPress={handleModelClose}
      />
      <View style={styles.modelContent}>
        {/* <Text>Hello! i am model</Text> */}
        <View style={styles.innerForm}>
          <TextInput
            onChangeText={handleTitle}
            placeholder="Enter Name"
            style={styles.inputField}
          />
          <TextInput
            onChangeText={handleDesc}
            multiline
            placeholder="Enter Desc"
            style={styles.inputField}
          />
          <TextInput
            onChangeText={handleReview}
            keyboardType="numeric"
            placeholder="Enter Review"
            style={styles.inputField}
          />
          <View style={styles.submitButton}>
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default AddNewReview;
const styles = StyleSheet.create({
  modelToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    paddingTop: 11,
    paddingRight: 9,
    borderRadius: 50,
    alignSelf: "center",
    backgroundColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 8
  },
  modelClose: {
    marginTop: 20,
    marginBottom: 0
  },
  modelContent: {
    flex: 1,
    justifyContent: "center"
  },
  innerForm: {
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 15,
    paddingVertical: 30,
    marginHorizontal: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 8
  },
  inputField: {
    height: 40,
    borderColor: "#ddd",
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    marginHorizontal: 15
  },
  submitButton: {
    marginHorizontal: 15,
    marginTop: 20
  }
});
