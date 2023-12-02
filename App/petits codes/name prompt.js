// TextPrompt.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Prompt from 'react-native-prompt-android';

const NamePrompt = () => {
  const [promptVisible, setPromptVisible] = useState(false);
  const [promptText, setPromptText] = useState('');

  const handleOpenPrompt = () => {
    setPromptVisible(true);
  };

  const handleClosePrompt = () => {
    setPromptVisible(false);
  };

  const handlePromptSubmit = (value) => {
    setPromptText(value);
    setPromptVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{promptText ? `Entered Text: ${promptText}` : 'No text entered'}</Text>
      <Button title="Open Text Prompt" onPress={handleOpenPrompt} />

      <Prompt
        title="Enter your beautiful name"
        placeholder="Type here"
        visible={promptVisible}
        onCancel={handleClosePrompt}
        onSubmit={handlePromptSubmit}
      />
    </View>
  );
};

export default NamePrompt;
