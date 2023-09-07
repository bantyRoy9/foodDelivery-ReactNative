import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import Restaurent from './Screens/Restaurent';
import { Provider } from 'react-redux';
import { store } from './Store';
import BasketScreen from './Screens/BasketScreen';
import PreLoadingScreen from './Screens/PreLoadingScreen';
import DeliveryScreen from './Screens/DeliveryScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import LoginScreen from './Screens/LoginScreen';
import OtpVerificationScreen from './Screens/OtpVerificationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator defaultScreenOptions={WelcomeScreen}>
          <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown:false}}/>
          <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
          <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
          <Stack.Screen name='Restaurent' component={Restaurent} options={{headerShown:false}}/>
          <Stack.Screen name="Basket" component={BasketScreen} options={{ presentation:"card",headerShown:false }} />
          <Stack.Screen name="PreLoad" component={PreLoadingScreen} options={{ headerShown:false }} />
          <Stack.Screen name="Delivery" component={DeliveryScreen} options={{ headerShown:false }} />
          <Stack.Screen name="OtpVerification" component={OtpVerificationScreen} options={{ headerShown:false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
