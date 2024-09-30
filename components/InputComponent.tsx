import React, { useState } from 'react'; // Importing React and useState hook
import { View, TextInput, Button } from 'react-native'; // Importing necessary components from react-native

// Defining the props interface for the InputComponent
interface InputComponentProps {
  onAddTask: (task: string) => void; // Function to handle adding a task
}

// Defining the InputComponent as a functional component with props of type InputComponentProps
const InputComponent: React.FC<InputComponentProps> = ({ onAddTask }) => {
  // Using useState hook to manage the state of the text input
  const [text, setText] = useState('');

  // Function to handle the addition of a task
  const handleAddTask = () => {
    onAddTask(text); // Calling the onAddTask function passed via props with the current text
    setText(''); // Resetting the text input to an empty string
  };

  return (
    <View>
      {/* TextInput component to take user input */}
      <TextInput
      value={text} // Binding the value of TextInput to the state variable 'text'
      onChangeText={setText} // Updating the state variable 'text' whenever the input changes
      placeholder="Enter text" // Placeholder text for the TextInput
      style={{ fontSize: 20 }} // Making the text input bigger by increasing the font size
      />
      {/* Button component to trigger the handleAddTask function */}
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
};

export default InputComponent;