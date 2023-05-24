import { View, Text, Animated } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'
const PreLoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 4000);
  },[])
  return (
    <View className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image source={require('../assets/preload.gif')} animation='slideInUp' iterationCount={1} className="h-96 w-96"/>
      <Animatable.Text animation='slideInUp' iterationCount={1} className="text-white font-bold text-center text-sm my-10">
        <Text>Waiting for Restaurent accepting your order</Text>
      </Animatable.Text>
      <Progress.Circle size={50} indeterminate={true} color='white' />
    </View>
  )
}

export default PreLoadingScreen