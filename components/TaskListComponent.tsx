import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

// Define the interface for the props that TaskListComponent will receive
interface TaskListProps {
    tasks: { id: string, text: string, completed: boolean }[]; // Array of task objects
    onCompleteTask: (id: string) => void; // Function to handle task completion
    onDeleteTask: (id: string) => void; // Function to handle task deletion
}

// Define the TaskListComponent functional component
const TaskListComponent: React.FC<TaskListProps> = ({ tasks, onCompleteTask, onDeleteTask }) => {
    return (
        // Render a FlatList component
        <FlatList
            data={tasks} // Pass the tasks array as data to the FlatList
            keyExtractor={(item) => item.id} // Extract the unique key for each item
            renderItem={({ item }) => (
                <View style={styles.taskRow}>
                    <Text style={item.completed ? styles.completedTask : styles.taskText}>{item.text}</Text>
                    {!item.completed && (
                        <TouchableOpacity style={styles.completeButton} onPress={() => onCompleteTask(item.id)}>
                            <Text style={styles.buttonText}>Complete</Text>
                        </TouchableOpacity>
                    )}
                    <TouchableOpacity style={styles.deleteButton} onPress={() => onDeleteTask(item.id)}>
                        <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    taskRow: {
        flexDirection: 'row', // Align text and buttons in a row
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
    },
    taskText: {
        fontSize: 16,
        flexShrink: 1, // Allow text to shrink within available space
        flexWrap: 'wrap',  // Ensure text wraps to the next line
        width: '70%',      // Limit the text container to 70% of the screen width
    },
    completedTask: {
        fontSize: 16,
        flex: 1,
        textDecorationLine: 'line-through', // Cross out completed tasks
        width: '70%',      // Limit the text container to 70% of the screen width
        color: '#a9a9a9', // Gray out completed tasks
    },
    completeButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        marginLeft: 10,
    },
    deleteButton: {
        backgroundColor: '#FF6347',
        padding: 10,
        borderRadius: 5,
        marginLeft: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default TaskListComponent;
