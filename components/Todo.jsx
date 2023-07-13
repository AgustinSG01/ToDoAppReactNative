import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/Feather";
import EditTodo from "./EditTodo";

const Todo = ({
  title,
  id,
  removeTodoFunction,
  editTodoFunction,
  completeTodo,
  completed,
}) => {
  const [edit, setEdit] = useState(false);

  return (
    <View style={styles.todoContainer}>
      <TouchableWithoutFeedback onPress={() => completeTodo(id)}>
        <View style={styles.completeButton}>
          <Icon2
            name="check"
            size={20}
            color={completed ? "white" : "#36454F"}
          />
        </View>
      </TouchableWithoutFeedback>
      {edit ? (
        <EditTodo
          editTodoFunction={editTodoFunction}
          id={id}
          setEdit={setEdit}
          title={title}
        />
      ) : (
        <>
          <Text style={completed ? styles.completedTitle : styles.title}>
            {title}
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={() => removeTodoFunction(id)}
              style={styles.removeButton}
            >
              <Icon name="ios-trash" size={20} color={"white"} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon2
                name="edit"
                size={20}
                color="white"
                onPress={() => {
                  setEdit(true);
                }}
              />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
    flex: 1,
    paddingEnd: 15,
    paddingLeft: 15,
    alignItems: "flex-start",
  },
  completedTitle: {
    color: "rgb(192, 192, 192)",
    fontSize: 20,
    flex: 1,
    paddingEnd: 15,
    paddingLeft: 15,
    alignItems: "flex-start",
    textDecorationLine: "line-through"
  },
  buttonsContainer: {
    flexDirection: "row",
    flex: 0,
    justifyContent: "space-between",
    width: 50,
    alignItems: "center",
  },
  completeButton: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "white",
    width: 30,
    height: 30,
    backgroundColor: "#36454F",
    borderRadius: 25,
  },
});
