import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";
import AddTodo from "../components/AddTodo";
import uuid from "react-native-uuid";
import { SafeAreaView } from "react-native";
import { FlatList } from "react-native";
import Todo from "../components/Todo";

const Main = () => {
  const [todos, setTodos] = useState([]);

  function addTodoFunction(title) {
    if (title) {
      const newTodo = {
        id: uuid.v4(),
        title: title,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
    console.log(todos);
  }
  function removeTodoFunction(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function editTodoFunction(id, newTitle) {
    if (newTitle) {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.title = newTitle;
        }
        return todo;
      });
      setTodos(newTodos);
    }
  }

  function completeTodo(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  function clearCompleted() {
    const newTodos = todos.filter((todo) => todo.completed === false);
    setTodos(newTodos);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <AddTodo addTodoFunction={addTodoFunction} />
      </View>
      <View style={styles.todosContainer}>
        <FlatList
          data={todos}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Todo
              completeTodo={completeTodo}
              editTodoFunction={editTodoFunction}
              removeTodoFunction={removeTodoFunction}
              id={item.id}
              title={item.title}
              completed={item.completed}
            />
          )}
        />
      </View>
      <View style={styles.clearTasksContainer}>
        <TouchableOpacity onPress={() => clearCompleted()}>
          <Text style={styles.clearTasksButton}>Clear Completed Tasks</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
  },
  todosContainer: {
    justifyContent: "flex-start",
    paddingTop: 10,
    maxHeight: 500,
    flexGrow: 0,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#33414a",
  },
  clearTasksContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  clearTasksButton: {
    backgroundColor: "#2c2f33",
    color: "white",
    padding: 12,
    borderRadius: 5
  },
});
