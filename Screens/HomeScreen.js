import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import globalStyleSheet from './globalStyleSheet';
import { ChevronDownIcon,UserIcon,MagnifyingGlassIcon,AdjustmentsVerticalIcon} from "react-native-heroicons/outline";
import Categories from '../Components/Categories';
import Features from '../Components/Features';
import { restaurentData } from '../assets/JSONData/restaurentData'
export default function HomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect( () => {
  },[])
  return (
    <SafeAreaView style={globalStyleSheet.androidSaveAreaView} className="px-4">
      <View className="flex-row items-center pb-3 space-x-2">
        <Image source={{uri:'https://links.papareact.com/wru'}}
         className="h-7 w-7 bg-gray-300 rounded-full"/>
        <View className="flex-1">
          <Text className="text-xs font-bold text-gray-400">Delivary Now!</Text>
          <View className="font-bold text-xl flex-row items-center">
            <Text className="font-extrabold text-lg text-gray-500">Current Location</Text>
            <ChevronDownIcon size={18} color="#00CCBB" className="p-1"/>
          </View>
        </View>
        <UserIcon size={35} color="#00CCBB"/>
      </View>
      <View className="flex-row items-center space-x-2 pb-2">
        <View className="flex-row bg-gray-200 flex-1 p-3 space-x-2 items-center">
          <MagnifyingGlassIcon size={20} color="gray"/>
          <TextInput placeholder='Restaurents and cuisines' keyboardType='default'/>
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB"/>
      </View>
      <ScrollView contentContainerStyle={{paddingBottom:100}}>
        <Categories />
        {/* {restaurentData.map((el,idx)=>(
          el?.results_shown > 0  && <Features id={idx} title={"Featured"} description={"loreme loda adjadfk"} restaurents={el?.restaurants}/>
        ))} */}
        <Features id={1} title={"Featured"} description={"loreme loda adjadfk"} restaurents={restaurentData[0].restaurants}/>
        <Features id={2} title={"Featured"} description={"loreme loda adjadfk"} restaurents={restaurentData[1].restaurants}/>

      </ScrollView>
    </SafeAreaView> 
  )
}