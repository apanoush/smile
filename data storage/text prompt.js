import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import Prompt from 'react-native-prompt';
import RNFS from 'react-native-fs';

const App = () => {
  const [isPromptVisible, setIsPromptVisible] = useState(false);

  const handlePromptSubmit = async (value) => {

    // Get the current date and time
    const currentDate = new Date();

    // Format the date as a string
    const formattedDate = currentDate.toLocaleString(); // You can customize the format based on your needs

    // Save the prompted text to a local .md file
    const filePath = `${RNFS.DocumentDirectoryPath}/` + formattedDate + `.md`;

    try {
      await RNFS.writeFile(filePath, `# My Document\n\n${value}`, 'utf8');
      console.log('File saved successfully:', filePath);
    } catch (error) {
      console.error('Error saving file:', error);
    }

    // Close the prompt
    setIsPromptVisible(false);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Open Prompt" onPress={() => setIsPromptVisible(true)} />

      {/* Text Prompt */}
      <Prompt
        title="Enter Text"
        placeholder="Type here"
        visible={isPromptVisible}
        onCancel={() => setIsPromptVisible(false)}
        onSubmit={handlePromptSubmit}
      />
    </View>
  );
};

export default App;
