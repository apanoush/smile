import { View, Image, StyleSheet,Text,Button,TouchableOpacity} from 'react-native';

const Welcome3 = ({navigation}) => {
    

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

            
              {/*Button*/} 
              <TouchableOpacity style = {styles.logoButton}>
              <Text style={styles.buttonText}>Pick the logo</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.colorButton} onPress={() => navigation.navigate('FourthScreen')}>
              <Text style={styles.buttonText}>Pick the color</Text>
              </TouchableOpacity>


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
    simpleText: {
      fontSize: 25,
      color: '#000000',
      textAlign: 'center',
      fontFamily: "Georgia"
    },
    colorButton: {
      backgroundColor: '#FFC300', // Button background color
      padding: 10,
      borderRadius: 4,
      
    },
    logoButton: {
      backgroundColor: '#FFC300', // Button background color
      padding: 10,
      borderRadius: 4,
      
    },
    buttonText: {
      color: 'white', // Button text color
      textAlign: 'center',
      fontSize: 20,
    },
  
  });
export default Welcome3;