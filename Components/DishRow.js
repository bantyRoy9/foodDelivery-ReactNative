import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { CurrencyRupeeIcon, MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'

export default function DishRow({ id, title, imgUrl, price, description }) {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={() => setIsPressed(!isPressed)}
        className={`border bg-white border-gray-200 ${isPressed && "border-b-0"}`}
      >
        <View className="flex-row space-x-2 p-4 items-center">
          <View className="flex-1">
            <Text className="text-lg mb-1">{title}</Text>
            <Text className="text-gray-400">{description} </Text>
            <View className="text-gray-400 mt-2 items-center flex-row">
              <CurrencyRupeeIcon color="gray" opacity={0.3} />
              <Text className="text-gray-500">{price}</Text>
            </View>
          </View>
          <View>
            <Image key={id} source={{ uri: imgUrl }}
              className="w-20 h-20" />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed &&
        <View>
          <View className="flex-row items-center bg-white pb-2">
            <TouchableOpacity>
              <MinusCircleIcon color={"#00CCBB"} size={40} />
            </TouchableOpacity>
            <Text className="mx-1">0</Text>
            <TouchableOpacity>
              <PlusCircleIcon color={"#00CCBB"} size={40} />
            </TouchableOpacity>
          </View>
        </View>}
    </>
  )
}
