import { View, Text, ScrollView, Image, TouchableOpacity, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftIcon, ChevronDoubleRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon, CurrencyRupeeIcon } from 'react-native-heroicons/solid';
import DishRow from '../Components/DishRow';
import { dishList } from '../assets/JSONData/restaurentData';
import PressableButton from '../Components/buttons/Pressable';
import BasketIcons from '../Components/BasketIcons';
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../Feature/basketSlice';
export default function Restaurent() {
  const { params: { id,
    imgUrl,
    title,
    rating,
    thumb,
    rating_Color,
    genere,
    address,
    short_description,
    dishes,
    long,
    lat } } = useRoute();
  const navigator = useNavigation();
  const items = useSelector(selectBasketItems)
  return (
    <>
        <BasketIcons />
        <ScrollView>
      <View className='relative'>
        <Image source={{ uri: thumb }} className="h-56 w-full bg-gray-100 p-4" />
        <TouchableOpacity onPress={navigator.goBack} className="absolute top-14 p-2 left-5 bg-gray-100 rounded-full">
          <ArrowLeftIcon color="#00CCBB" size={20} />
        </TouchableOpacity>
      </View>
      <View className="bg-white">
        <View className="pt-4 px-4">
          <Text className="text-2xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row space-x-1 items-center">
              <StarIcon size={22} color="green" opacity={0.5} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> · {'Offers'}
              </Text>
            </View>
            <View className="flex-row space-x-1 items-center">
              <MapPinIcon size={22} color="gray" opacity={0.5} />
              <Text className="text-xs text-gray-500">
                <Text className="text-gray-500">Nearby</Text> · {address}
              </Text>
            </View>

          </View>
          <Text className="text-grey-500 mt-2 pb-3">{short_description && short_description[0].event.description}</Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
          <QuestionMarkCircleIcon size={22} color="grey" opacity={0.5} />
          <Text className="flex-1 pl-2 text-md font-bold">Have a food Allergy?</Text>
          <ChevronDoubleRightIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View className={ items.length>0 ? 'pb-24' : 'pb-0'}>
      <Text className="p-4 text-white text-lg bg-gray-400">Menu</Text>
        {dishList.map((el,idx)=>(
          <DishRow key={idx} id={idx} title={el.title} imgUrl={el.imgUrl} price={el.price} description={el.description}/>
        ))}
      </View>
    </ScrollView>
    </>

  )
}
