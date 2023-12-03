import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

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
            
            {/*Colorsr1*/}
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
            </View>
            {/*Colorsr2*/}
            <View style={ [styles.buttonr2, styles.buttonRow2]}>
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
            <View style={styles.buttonSave}>
              <TouchableOpacity style = {styles.colorButton} onPress={() => navigation.navigate('ThirdScreen', {backgroundColor: backgroundColor})}>
              <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
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

    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap', // Wrap to the next line if needed
        //padding:10,
        //paddingVertical: 10,
        //paddingHorizontal: 15,
      },
    button: {
        width: '60%',
        height: 90,
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5, // Adjust this value for more space between buttons vertically
        backgroundColor: 'transparent',
    
    },
    buttonRow2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap', // Wrap to the next line if needed
        //padding:10,
        //paddingVertical: 10,
        //paddingHorizontal: 15,
      },
    buttonr2: {
        width: '60%',
        height: 90,
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5, // Adjust this value for more space between buttons vertically
        backgroundColor: 'transparent',
    
    },

    buttonSave: {
      backgroundColor: '#FFC300', // Button background color
      padding: 10,
      borderRadius: 15,
      top: '30%'
    }
});
export default Colors;