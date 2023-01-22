import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon, MapPinIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

export default function RestaurentCard({
    id,
    imgUrl,
    thumb,
    title,
    rating,
    rating_Color,
    genere,
    address,
    short_description,
    dishes,
    long,
    lat
}) {
    const navigator = useNavigation();
    return (
        <TouchableOpacity
        onPress={()=>navigator.navigate("Restaurent",{
            id,
            imgUrl,
            thumb,
            title,
            rating,
            rating_Color,
            genere,
            address,
            short_description,
            dishes,
            long,
            lat
        })}
        className="bg-white shadow-sm mr-3">
            <Image key={1} source={{
                uri: thumb
            }} className="h-40 w-60 rounded" />
            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <StarIcon color={`#${rating_Color}`} opacity={0.5} size={22} />
                    <Text className="text-gray-500 text-xs">
                        <Text className={`text-'#${rating_Color}'-500`}>{rating}</Text> · ({genere})
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <MapPinIcon color="gray" opacity={0.4} size={22} />
                    <Text className="text-gray-500 text-xs"><Text>Nearby</Text> · {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}