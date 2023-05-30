import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import globalStyleSheet from './globalStyleSheet'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { basketItemsTotal, selectBasketItems, removeToBasket } from '../Feature/basketSlice'
// import { removeToBasket } from '../Feature/basketSlice'

const BasketScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const items = useSelector(selectBasketItems)
  const basketTotoal = useSelector(basketItemsTotal);
  const [groupItem, setGroupItem] = useState([]);
  useEffect(() => {
    const groupItem = items.reduce((results, item) => {
      (results[item.title] = results[item.title] || []).push(item);
      return results
    }, {})
    // console.log(groupItem,'*************************')
    setGroupItem(groupItem);
  }, [items]);

  return (
    <SafeAreaView style={globalStyleSheet.androidSaveAreaView} className="flex-1 bg-white">
      <View className="flex-1 bg-gray-200">
        <View className="bg-white items-center p-5 shadow-sm rounded-lg">
          <View>
            <Text className="text-[#3d3d3d] font-bold text-center">Basket</Text>

          </View>
          <TouchableOpacity onPress={() => navigation.goBack()} className="rounded-full bg-gray-100 absolute right-5 top-3">
            <XCircleIcon height={40} width={40} color={'#00CCBB'} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image source={{ uri: 'https://links.papareact.com/wru' }} className="h-7 w-7 bg-gray-300 p-4 rounded-full" />
          <Text className="flex-1">Delivery in 50-60 Min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupItem).map(([key, items]) => (
            <View key={key} className="flex-row space-x-3 items-center bg-white py-2 px-5">
              <Text className="text-[#00CCBB]">{items.length} x </Text>
              {/* <Text>{items[0]?.imgUrl}</Text> */}
              <Image source={{ uri: items[0]?.imgUrl }} className="w-12 h-12 rounded-full" />
              <Text className="flex-1">{items[0]?.title}</Text>
              <Text className="text-gray-600">{items[0]?.price}</Text>
              <TouchableOpacity ><Text className="text-[#00CCBB]" onPress={() => {
                if(items.length>0) {
                  dispatch(removeToBasket({ item: items[0].title }));
                }else{
                  setTimeout(()=>{
                    navigation.goBack();
                  },1500)
                };
              }}>Remove</Text></TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="mt-4 p-5 space-y-4 bg-white">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">SubTotal</Text>
            <Text className="text-gray-400">{basketTotoal}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivey Fee</Text>
            <Text className="text-gray-400">20</Text>
          </View>

          <View className="flex-row justify-between font-bold">
            <Text >Order Total</Text>
            <Text>{basketTotoal + 20}</Text>
          </View>

          <TouchableOpacity className="rounded-lg bg-[#00CCBB] p-4" onPress={() => navigation.navigate('PreLoad')}>
            <Text className="text-white text-center font-semibold">Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen