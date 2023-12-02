
import { View, Image, StyleSheet,Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import welcome_page from './petits codes/welcome page';


export default function App() {
  const [name, setName] = useState('olivier');
  welcome_page();

  return (
    <View>
      <welcome_page />
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF1A6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title : {
    color: '#000000',
    fontSize: 40,
    fontFamily: "Georgia"
  },
  TitleContainer:{
    position: "absolute",
    textAlign: "center",
    top: "15%",
  },
  TextContainer:{
    position: "absolute",
    textAlign: "center",
    top: "38%",
  },
  SoleilContainer:{
    backgroundColor: 'transparent',
    position: "absolute",
    textAlign: "center",
    top: "23%",
  },
  soleil: {
    width: 200, // Adjust width and height according to your image size
    height: 100,
    backgroundColor: 'transparent'
  },
  prompt: {
    position: "absolute",
    textAlign: "center",
    top: "60%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  simpleText: {
    fontSize: 25,
    color: '#000000',
    textAlign: 'center',
    fontFamily: "Georgia"
  },

});


