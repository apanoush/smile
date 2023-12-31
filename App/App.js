
import Welcome1 from './components/Welcome1.js';
import Welcome2 from './components/Welcome2.js';
import Welcome3 from './components/Welcome3.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from './components/color page.js';
import Logos from './components/logos.js';

const Stack = createStackNavigator();
const App =() => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Welcome1} />
        <Stack.Screen name="SecondScreen" component={Welcome2} />
        <Stack.Screen name="ThirdScreen" component={Welcome3} />
        <Stack.Screen name="FourthScreen" component={Colors} />
        <Stack.Screen name="Logos" component={Logos} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;




