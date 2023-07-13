import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Fontisto";

const EditTodo = ({ editTodoFunction, id, title, setEdit }) => {
  const [text, setText] = useState(title);
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setText}
        placeholder="Edit Task..."
        placeholderTextColor="grey"
        value={text}
        onSubmitEditing={() => {
          editTodoFunction(id, text);
          setEdit(false);
        }}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={() => {
          editTodoFunction(id, text);
          setEdit(false);
        }}
        style={styles.button}
      >
        <Icon name="save-1" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default EditTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
  },
  input: {
    flex: 1,
    color: "white",
    fontSize: 20,
    backgroundColor: "#2c2f33",
    padding: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  button: {
    flex: 0,
    width: 40,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2c2f33",
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
  },
});
