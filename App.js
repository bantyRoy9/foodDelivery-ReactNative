import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import Restaurent from './Screens/Restaurent';
import { Provider } from 'react-redux';
import { store } from './Store';
import BasketScreen from './Screens/BasketScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
          <Stack.Screen name='Restaurent' component={Restaurent} options={{headerShown:false}}/>
          <Stack.Screen name="Basket" component={BasketScreen} options={{ presentation:"modal",headerShown:false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
