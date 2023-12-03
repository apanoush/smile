import { View, Image, StyleSheet,Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Welcome2 = ({firstVisit}) => {
    const [name, setName] = useState('olivier');

    const RoundedButton = ({ onPress, title }) => {
        return (
          <TouchableOpacity style={styles.buttonContainer} onPress={ () => navigation.navigate('ThirdScreen', {name: name})}>
            <Text style={styles.buttonText}>{title}</Text>
          </TouchableOpacity>
        );
      };

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                
                {/*HI*/}
                <View style={styles.TitleContainer}>
                <Text style = {styles.Title}>First</Text>
                </View>
                {/*Soleil*/}
                    <View style={styles.SoleilContainer}>
                    <Image 
                    source={require('../assets/sun.png')}
                    style={styles.soleil}
                    resizeMode="contain"
                    />
                    </View>
                {/*Welcome to Smile*/}
                <View style={styles.TextContainer}>
                <Text style = {styles.Title}>design</Text>
                <Text style = {styles.Title}>your</Text>
                <Text style = {styles.Title}>dream</Text>
                <Text style = {styles.Title}>app</Text>
                </View>
            </View>

            <View style={styles.container2}>
                
                <RoundedButton 
                title="Pick the Color" 
                onPress={ () => navigation.navigate('ThirdScreen', {name: name})}
                />
                <RoundedButton title="Pick the logo" ></RoundedButton>
                <RoundedButton title="Pick the color" onPress={ () => navigation.navigate('ThirdScreen', {name: name})}> </RoundedButton>

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
    container2: {
        flex: 1,
        backgroundColor: '#FFF1A6',
        alignItems: 'left',
        justifyContent: 'left',
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
    buttonContainer: {
        backgroundColor: 'orange', // Button background color
        borderRadius: 15, // Adjust the border radius to control the roundness
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
      color: 'white', // Button text color
      fontSize: 20,
    },
  
  });
export default Welcome2;