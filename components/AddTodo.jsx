import { StyleSheet, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";

const AddTodo = ({ addTodoFunction }) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.generalContainer}>
      <TextInput
        style={styles.input}
        placeholder="What are you going to do?"
        placeholderTextColor="grey"
        value={text}
        onChangeText={setText}
        onSubmitEditing={() => {
          addTodoFunction(text);
          setText("");
        }}
      />
      <TouchableOpacity
        onPress={() => {
          addTodoFunction(text);
          setText("");
        }}
        style={styles.button}
      >
        <Icon name="plus" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  generalContainer: {
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 30,
    paddingBottom: 10,
  },
  input: {
    backgroundColor: "#2c2f33",
    color: "white",
    padding: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    width: 200,
  },
  button: {
    backgroundColor: "#2c2f33",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
  },
});
