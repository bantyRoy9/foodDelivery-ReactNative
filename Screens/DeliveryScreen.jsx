import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { XCircleIcon } from 'react-native-heroicons/outline'
import { XMarkIcon } from 'react-native-heroicons/solid'
import globalStyleSheet from './globalStyleSheet'
import { useNavigation } from '@react-navigation/native'
import * as Progress from 'react-native-progress'
import MapView,{ Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import { selectBasketItems } from '../Feature/basketSlice'
const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurent = useSelector(selectBasketItems);
    // const restaurentCoordinates = useSelector()
  return (
    <View className="bg-[#00CCBB] flex-1">
        <SafeAreaView className="z-50" style={globalStyleSheet.androidSaveAreaView}>
            <View className="flex-row justify-between font-bold items-center p-5">
                <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                    <XMarkIcon size={30} color={'white'}/>
                </TouchableOpacity>
                <Text className="text-white font-light text-lg">order help</Text>
            </View>
            <View className="z-50 bg-white rounded-md shadow-md mx-4 p-6">
                <View className="flex-row justify-between">
                    <View>
                        <Text className="text-sm text-gray-400">Estimate Arival</Text>
                        <Text className="text-xl font-bold">45-50 Minutes</Text>
                    </View>
                    <Image source={{ uri : "https://links.papareact.com/fls" }} className="h-16 w-20"/>
                </View>
                <Progress.Bar size={30} indeterminate={true} color='#00CCBB' />
                <Text className="mt-3 text-gray-500">
                    Your order at is beging prepared
                </Text>
            </View>
            <MapView 
                className="flex-1 -mt-10 z-0" 
                initialRegion={{latitude: 28.561499150922536,longitude:77.06671690682862 ,longitudeDelta:0.05,latitudeDelta:0.05}}
                mapType='mutedStandard'
            >
                <Marker 
                coordinate={{
                    latitude:28.5542851000,
                    longitude:77.1944706000
                }}
                title='Hauz khas'
                identifier='origin'
                pinColor='#00CCBB'
                />
            </MapView>

            <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
                <Image 
                source={{uri:'https:links.papareact.com/wru'}}
                className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
            />
            <View className="flex-1">
                <Text className="text-lg">Banty</Text>
                <Text className="text-gray-400">Your Ride</Text>
            </View>
                <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>

            </SafeAreaView>
        </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen