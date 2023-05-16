import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import PressableButton from './buttons/Pressable'
import { useSelector } from 'react-redux'
import { basketItemsTotal, selectBasketItems } from '../Feature/basketSlice'
import { CurrencyDollarIcon, CurrencyRupeeIcon } from 'react-native-heroicons/outline'

const BasketIcons = () => {

    const item = useSelector(selectBasketItems);
    const basketTotal = useSelector(basketItemsTotal);

  return (
      <View className="absolute bottom-6 w-full z-50">
        {item.length ? <> 
            <TouchableOpacity className="mx-5 bg-[#00CCBB] px-4 py-3 rounded-lg flex-row items-center space-x-1">
                <Text className="text-white font-extrabold text-lg bg-[#01a296] py-1 px-2">{item.length}</Text>
                <Text className="flex-1 text-white text-lg font-extrabold text-center">View Basket</Text>
                <Text className="text-lg text-white font-extrabold">
                   {/* <CurrencyRupeeIcon color={'white'} /> */}
                   <Text className="-my-5 m-6">{basketTotal.toFixed(2)}</Text>
                </Text>
            </TouchableOpacity>
        </> : <></>
        }
      </View>
  )
}

export default BasketIcons