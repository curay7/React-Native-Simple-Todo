import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);

  const handleSubmit = () => {
    if (task != null) {
      setTaskItem([...taskItem, task]);
    }
    Keyboard.dismiss();
    setTask(null);
  };

  const handleCompleteTask = (index) => {
    let intialTaskItems = [...taskItem];
    intialTaskItems.splice(index, 1);
    setTaskItem(intialTaskItems);
  };
  return (
    <View style={styles.container}>
      <View style={styles.taskWraper}>
        <Text style={styles.taskHeader}>Today's Task</Text>
      </View>
      <View style={styles.taskItem}>
        {taskItem.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleCompleteTask(index)}
            >
              <Task text={item} />
            </TouchableOpacity>
          );
        })}
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.wrapInputTask}
      >
        <TextInput
          style={styles.taskTextInput}
          placeholder={"Write Task Here"}
          value={task}
          onChangeText={(text) => {
            setTask(text);
          }}
        ></TextInput>
        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.customInputBtn}>
            <Text style={styles.customInputText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    paddingHorizontal: 20,
  },
  taskHeader: { fontSize: 24, fontWeight: "bold" },
  taskWraper: { paddingTop: 70 },
  wrapInputTask: {
    position: "absolute",
    width: "100%",
    bottom: 60,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  taskTextInput: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "#FFF",
    width: 250,
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  customInputBtn: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  customInputText: {},
});
