import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NamePrompt from './petits codes/name prompt';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>SMILE, Votre réseau</Text>
      <StatusBar style="auto" />
      <NamePrompt />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
