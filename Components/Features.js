import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurentCard from './RestaurentCard'

export default function Features({id,title,description,restaurents}) {
  
  return (
    <View>
        <View className="flex-row mt-4 items-center justify-between">
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color={"#00CCBB"}/>
        </View>
        <Text className="text-gray-500 text-xs">{description}</Text>
        <ScrollView contentContainerStyle={{ paddingHorizontal:1 }} horizontal showsHorizontalScrollIndicator={false} className="pt-4">
          {restaurents && restaurents.map(el=>(
            el.restaurant?.featured_image && <RestaurentCard 
                id={'ss'}
                thumb={el.restaurant.thumb?el.restaurant.thumb:el.restaurant.featured_image}
                imgUrl={el.restaurant?.featured_image} 
                title={el.restaurant.name}
                rating={el.restaurant.user_rating.aggregate_rating}
                genere={el.restaurant.user_rating.votes}
                rating_Color={el.restaurant.user_rating.rating_color}
                address={el.restaurant.location.city}
                short_description={el.restaurant.zomato_events?el.restaurant.zomato_events:null}
                dishes={'rice'}
                long={'20'}
                lat={'1'}
            />
          ))}
        </ScrollView>
    </View>
  )
}