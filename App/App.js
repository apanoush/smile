import { StatusBar } from 'expo-status-bar';
import { View, Image, StyleSheet,Text } from 'react-native';


export default function App() {

  return (
    <View style={styles.container}>
      
      {/*HI*/}
      <View style={styles.TitleContainer}>
      <Text style = {styles.Title}>HI</Text>
      </View>
      {/*Soleil*/}
        <View style={styles.SoleilContainer}>
        <Image 
        source={require('./assets/sun.png')}
        style={styles.soleil}
        resizeMode="contain"
        />
        </View>
      {/*Welcome to Smile*/}
      <View style={styles.TextContainer}>
      <Text style = {styles.Title}> Welcome{'\n'}       on{'\n'}   SMILE</Text>
      </View>

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
    top: "25%",
  },
  TextContainer:{
    position: "absolute",
    textAlign: "center",
    top: "45%",
  },
  SoleilContainer:{
    backgroundColor: 'transparent',
    position: "absolute",
    textAlign: "center",
    top: "32%",
  },
  soleil: {
    width: 200, // Adjust width and height according to your image size
    height: 100,
    backgroundColor: 'transparent'
  }
});


