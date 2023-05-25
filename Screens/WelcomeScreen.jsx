import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import * as Progrss from 'react-native-progress'
import * as animation from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
const WelcomeScreen = () => {
    const navigation = useNavigation();

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("Login");
        },3000)
    },[])
  return (
    <View className="flex-1 bg-[#00CCBB] justify-center items-center">
      <Text className="font-extrabold text-gray-100 mt-5 text-4xl italic">FOODelivery</Text>
      <View className="items-center mt-2">
        <Text className="text-white text-2xl font-semibold">100% Green Deliveries</Text>
        <Text className="text-xs text-gray-300">Carbon and Plastic Neutral in India</Text>
        {/* <Text className="text-xs text-gray-300"></Text> */}
      </View>
        <animation.Image source={{uri:'https://links.papareact.com/fls'}} className="h-36 w-36 shadow-sm relative top-14"/>
        <Progrss.CircleSnail size={40} indeterminate={true} color='white' className="space-y-5 absolute bottom-10"/>
    </View>
  )
}

export default WelcomeScreen

// const styles = StyleSheet.create({
//     container:{ backgroundColor: "#00CCBB",flex:'1',justifyContent:'center',alignItems:'centers'}
// })