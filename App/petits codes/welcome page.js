import { View, Image, StyleSheet,Text, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function welcome_page() {
    const [name, setName] = useState('olivier');

    return (
        <View style={styles.container}>
            
            {/*HI*/}
            <View style={styles.TitleContainer}>
            <Text style = {styles.Title}>HI</Text>
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
            <Text style = {styles.Title}> Welcome{'\n'}       on{'\n'}   SMILE</Text>
            </View>
            {/*Prompt*/}
            <View style={styles.prompt}>
                <Text style = {styles.simpleText}> Enter your beautiful name :</Text>
                <TextInput 
                style={styles.input}
                placeholder='Name'
                onChangeText={(text) => setName(text)}/>
            </View>
        

        

        </View>
    );

};