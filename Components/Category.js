import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Category = ({ title, Imgurl}) => {
  return (
      <TouchableOpacity className="flex-row mr-2 relative">
            <Image source={{uri:Imgurl}} className="h-20 w-20 bg-gray-300 rounded"/>
            <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
        </TouchableOpacity>
  )
}

export default Category