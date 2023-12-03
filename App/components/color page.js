import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, Button } from 'react-native';

const Colors = ({navigation}) => {
    
    const [backgroundColor, setBackgroundColor] = useState('#FFF1A6');

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
            <View style={ [styles.button, styles.buttonRow]}>
            <Button
                title="     "
                color="#FFFFFF" // You can set the text color
                onPress={() => setBackgroundColor("#FFFFFF")}
                />
            <Button
                title="     "
                color="#FBDCDC" // You can set the text color
                onPress={() => setBackgroundColor("#FBDCDC")}
                />
            <Button
                title="     "
                color="#F89797" // You can set the text color
                onPress={() => setBackgroundColor("#F89797")}
                />
            <Button
                title="     "
                color="#FF1C1C" // You can set the text color
                onPress={() => setBackgroundColor("#FF1C1C")}
                />
            <Button
                title="     "
                color="#A20000" // You can set the text color
                onPress={() => setBackgroundColor("#A20000")}
                />
            <Button
                title="     "
                color="#FFCF97" // You can set the text color
                onPress={() => setBackgroundColor("#FFCF97")}
                />
            <Button
                title="     "
                color="#FFAC7D" // You can set the text color
                onPress={() => setBackgroundColor("#FFAC7D")}
                />
            <Button
                title="     "
                color="#FFB23F" // You can set the text color
                onPress={() => setBackgroundColor("#FFB23F")}
                />
            <Button
                title="     "
                color="#FF9900" // You can set the text color
                onPress={() => setBackgroundColor("#FF9900")}
                />
            <Button
                title="     "
                color="#C26900" // You can set the text color
                onPress={() => setBackgroundColor("#C26900")}
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

    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap', // Wrap to the next line if needed
        marginTop: 20,
        //padding:10,
        paddingVertical: 50,
      },
      button: {
        width: '40%', // Adjust the width to fit 5 buttons per line
        borderRadius: 20,
        padding: 10,
        //backgroundColor: 'transparent',
        //alignItems: 'center',
        marginBottom: 20, // Adjust this value to control the vertical space between rows
      },
});
export default Colors;