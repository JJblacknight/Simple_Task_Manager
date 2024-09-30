import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Define the props interface for the TaskItemComponent
interface TaskItemProps {
    task: { id: string, text: string, completed: boolean };
    onCompleteTask: (id: string) => void;
    onDeleteTask: (id: string) => void;
}

// Define the TaskItemComponent as a functional component
const Task_Item_Component: React.FC<TaskItemProps> = ({ task, onCompleteTask, onDeleteTask }) => {
    return (
        <View style={styles.taskContainer}>
            {/* Task text with conditional styling for completed tasks */}
            <Text style={task.completed ? styles.completedTask : styles.taskText}>
                {task.text}
            </Text>

            {/* Button to mark the task as complete, only shown if the task is not completed */}
            {!task.completed && (
                <Button title="Complete" onPress={() => onCompleteTask(task.id)} />
            )}

            {/* Button to delete the task */}
            <Button title="Delete" onPress={() => onDeleteTask(task.id)} />
        </View>
    );
};

// Styles for Task Item
const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row', // Arrange items in a row
        alignItems: 'center', // Center items vertically
        justifyContent: 'space-between', // Space items evenly with space between
        padding: 10, // Add padding inside the container
        borderBottomWidth: 1, // Add a bottom border
        borderColor: '#ccc', // Set the border color
    },
    taskText: {
        fontSize: 16, // Set the font size for task text
    },
    completedTask: {
        fontSize: 16, // Set the font size for completed task text
        textDecorationLine: 'line-through', // Strike-through text for completed tasks
        color: 'gray', // Set the text color for completed tasks
    },
});

export default Task_Item_Component;
