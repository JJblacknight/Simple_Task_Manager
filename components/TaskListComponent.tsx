import React from 'react'; 
import { FlatList } from 'react-native'; 
import TaskItemComponent from './TaskItemComponent'; // Import the TaskItemComponent

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
            renderItem={({ item }) => (
                // Render each task using the TaskItemComponent
                <TaskItemComponent
                    task={item} // Pass the task object to the TaskItemComponent
                    onCompleteTask={onCompleteTask} // Pass the onCompleteTask function to the TaskItemComponent
                    onDeleteTask={onDeleteTask} // Pass the onDeleteTask function to the TaskItemComponent
                />
            )}
            keyExtractor={(item) => item.id} // Extract the unique key for each item
        />
    );
};

export default TaskListComponent;
