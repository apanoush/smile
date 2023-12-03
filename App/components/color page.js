import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, Button } from 'react-native';

const Colors = ({navigation}) => {
    
    const [backgroundColor, setBackgroundColor] = useState('#FFF1A6');

    const handleButtonClick = () => {
        setBackgroundColor('#FFC300');
    };

    return (
        <View style={[styles.container, { backgroundColor: backgroundColor }]}>
            
        
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
            <View style={styles.button}>
            <Button
                title="Change Color"
                color="#FFC300" // You can set the text color
                onPress={handleButtonClick}
                />
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

    button: {
        borderRadius: 15,
        padding: 10,
        alignItems: 'center',
      },
  
  });
export default Colors;