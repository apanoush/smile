import { View, Image, StyleSheet,Text,Button } from 'react-native';


const Logos = ({route,navigation}) => {
    //const {name} = route.params;
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
            
                {/*Button*/}
                <View style={styles.button}>
                <Button
                title="Next"
                color="#FFC300"
                onPress={ () => navigation.navigate('SecondScreen', {name: name})}
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
        position: "absolute",
        textAlign: "center",
        top: "90%",
      },
  
  });
export default Logos;