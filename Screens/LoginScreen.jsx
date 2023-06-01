import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import PhoneInput from 'react-native-phone-number-input'
import * as Font from 'expo-font'
const LoginScreen = () => {
  const [fontLoad, setFontLoad] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'RobotoSlab': require('../assets/fonts/RobotoSlab-Bold.ttf'),
    });
    setFontLoad(true);
  }
  useEffect(() => {
    loadFonts();
  }, [])
  const navigation = useNavigation();
  const [number,setNumber] = useState({});
  const changeHandler =(e)=>{
    setNumber(e);
    console.log(e);
  }
  const validateNumber = () => {
    navigation.navigate('OtpVerification')
  }
  return (
    <View className="flex-1 bg-gray-50">
      <View className="">
        <TouchableOpacity onPress={() => { navigation.navigate('Home') }} className="absolute z-50 top-12 right-5">
          <Text className="text-white py-1 px-4 bg-gray-400 opacity-50 rounded-full">Skip</Text>
        </TouchableOpacity>
        {/* <Text className="text-[#00CCBB] absolute z-50 font-bold text-4xl top-60 left-20 italic">FOODelivery</Text> */}
        <Image source={require('../assets/login.jpg')} className="h-72 w-full" />
      </View>
      <View className="items-center w-80 mx-auto">
        <Text className="text-2xl italic w-80 text-center my-6 font-bold text-gray-800 ">India's #1 Food Delivery and Dining App</Text>
        <View className="flex-row items-center">
          <View className="flex-1 h-0.5 bg-gray-300"></View>
          <View>
            <Text className="px-2 text-gray-600">Login in or Sign up</Text>
          </View>
          <View className="flex-1 h-0.5 bg-gray-300"></View>
        </View>
        <View className="my-4">
          <PhoneInput defaultCode='IN' layout='first' withShadow onChangeText={changeHandler}/>
        </View>
      </View>
      <View className="my-1">
        <TouchableOpacity className="rounded-lg bg-[#00CCBB] w-72 m-auto p-3" onPress={validateNumber}>
          <Text className="text-white text-center font-semibold">Continue</Text>
        </TouchableOpacity>
      </View>
      <View className="my-3">
        <View className="flex-row w-80 m-auto items-center">
          <View className="flex-1 h-0.5 bg-gray-300"></View>
          <View>
            <Text className="px-2 text-gray-600">or</Text>
          </View>
          <View className="flex-1 h-0.5 bg-gray-300"></View>
        </View>
      </View>
      <View className="my-2">
        <View className="flex-row justify-center">
          <TouchableOpacity className=" border mx-3 p-2 rounded-full w-13 border-solid border-gray-400">
            <Image className="h-6 w-6" source={{ uri: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png' }} />
          </TouchableOpacity>
          <TouchableOpacity className=" border p-2 mx-3 rounded-full w-13 border-solid border-gray-400">
            <Image className="h-6 w-6" source={{ uri: 'https://www.freepnglogos.com/uploads/whatsapp-logo-light-green-png-0.png' }} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View className="m-auto w-80 ">
          <Text className="text-center mt-2 text-gray-600 text-xs">By continuing, you agree to our</Text>
          <Text className="text-center text-gray-600 text-xs">Terms of service Privacy policy Content Policy</Text>
      </View>
      </View>
    </View>
  )
}

export default LoginScreen