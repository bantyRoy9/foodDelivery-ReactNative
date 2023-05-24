import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { XCircleIcon } from 'react-native-heroicons/outline'
import { XMarkIcon } from 'react-native-heroicons/solid'
import globalStyleSheet from './globalStyleSheet'
import { useNavigation } from '@react-navigation/native'

const DeliveryScreen = () => {
    const navigation = useNavigation();
  return (
    <View className="bg-[#00CCBB] flex-1">
        <SafeAreaView className="z-50" style={globalStyleSheet.androidSaveAreaView}>
            <View className="flex-row justify-between font-bold items-center p-5">
                <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                    <XMarkIcon size={30} color={'white'}/>
                </TouchableOpacity>
                <Text className="text-white font-light text-lg">order help</Text>
            </View>

        </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen