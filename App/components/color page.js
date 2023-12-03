import { View, Image, StyleSheet,Text, TextInput } from 'react-native';
import React, { useState } from 'react';

const Colors = ({firstVisit}) => {
    
    const RoundedButtonColor = ({ onPress, title }) => {
        return (
          <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
          </TouchableOpacity>
        );
      };
      
    return (
        <View style={styles.container}>
            
        
            <View style={styles.TitleContainer}>
            </View>
            {/*Soleil*/}
                <View style={styles.SoleilContainer}>
                <Image 
                source={require('../assets/sun.png')}
                style={styles.soleil}
                resizeMode="contain"
                />
                </View>
            
            {/*Colors*/}
            <View style={styles.container2}>
                
                <RoundedButton title=" " ></RoundedButton>
                <RoundedButton title=" " ></RoundedButton>

            </View>
        </View>
        );

};
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
export default Colors;