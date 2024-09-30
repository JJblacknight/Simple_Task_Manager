import React, { useState, useLayoutEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import InputComponent from "../components/InputComponent"; // Input component for adding tasks
import TaskListComponent from "../components/TaskListComponent"; // Task list component to display tasks

export default function Index() {
  // State variable to store the list of tasks
  const [tasks, setTasks] = useState<{ id: string; text: string; completed: boolean }[]>([]);

  // Set the title of the application
  useLayoutEffect(() => {
    document.title = "Simple Task Manager App";
  }, []);

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
      
      {/* Summary of the application */}
      <Text style={styles.summary}>
        This is a simple task manager application where you can add, complete, and delete tasks.
      </Text>

      {/* Input component to add new tasks */}
      <InputComponent onAddTask={addTask} />

      {/* ScrollView for scrolling task list */}
      <ScrollView contentContainerStyle={styles.scrollView} horizontal={true}>
        <View style={styles.taskContainer}>
          <Text style={styles.subtitle}>Current List</Text>
          {/* Task list component to display and manage tasks */}
          <TaskListComponent
            tasks={tasks}
            onCompleteTask={completeTask}
            onDeleteTask={deleteTask}
          />
        </View>
      </ScrollView>
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
  summary: {
    fontSize: 16,
    marginBottom: 20, // Space below the summary
    textAlign: "center",
  },
  scrollView: {
    width: '100%',
    paddingBottom: 20, // To allow scrolling
  },
  taskContainer: {
    width: '100%',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
