import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import PressableButton from './buttons/Pressable'

const BasketIcons = () => {
  return (
      <View className="absolute bottom-6 w-full z-50">
        <TouchableOpacity className="mx-5 bg-[#00CCBB] px-4 py-3 rounded-lg flex-row items-center space-x-1">
            <Text className="text-white font-extrabold text-lg bg-[#01a296] py-1 px-2">0</Text>
            <Text className="flex-1 text-white text-lg font-extrabold text-center">View Basket</Text>
            <Text className="text-lg text-white font-extrabold">0.00</Text>
        </TouchableOpacity>
      </View>
  )
}

export default BasketIcons