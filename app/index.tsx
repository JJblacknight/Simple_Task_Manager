import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import InputComponent from "../components/InputComponent"; // Input component for adding tasks
import TaskListComponent from "../components/TaskListComponent"; // Task list component to display tasks

export default function Index() {
  // State variable to store the list of tasks
  const [tasks, setTasks] = useState<{ id: string; text: string; completed: boolean }[]>([]);
  
  // Function to add a task
  const addTask = (task: string) => {
    const newTask = {
      id: Math.random().toString(), // Generate a unique ID for the task
      text: task,
      completed: false,
    };
    if (task.trim() === "") {
      return; // Prevent adding empty tasks
    }
    setTasks([...tasks, newTask]); // Add the new task to the list of tasks
  };

  // Function to mark a task as complete
  const completeTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  // Function to delete a task
  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id)); // Filter out the deleted task
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>

      {/* Input component to add new tasks */}
      <InputComponent onAddTask={addTask} />

      {/* Container for the current list of tasks */}
      <View style={styles.taskListContainer}>
        <Text style={styles.taskListTitle}>Current List</Text>
        <TaskListComponent
          tasks={tasks}
          onCompleteTask={completeTask}
          onDeleteTask={deleteTask}
        />
      </View>
    </View>
  );
}

// Basic styling for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32, // Larger text size
    fontWeight: "bold", // Bold font
    marginBottom: 20, // Space below the title
  },
  taskListContainer: {
    width: '100%',
    marginTop: 20,
  },
  taskListTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
