import { ScrollView,View, Text } from 'react-native'
import React from 'react'
import Category from './Category'

export default function Categories() {
  return (
    <ScrollView contentCointainerStyle={{
      paddingHorizantal:15,
      paddingTop:100
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
      <Category title="title1" Imgurl="https://links.papareact.com/gn7" />
      <Category title="title1" Imgurl="https://links.papareact.com/gn7" />
      <Category title="title1" Imgurl="https://links.papareact.com/gn7" />
      <Category title="title1" Imgurl="https://links.papareact.com/gn7" />
      <Category title="title1" Imgurl="https://links.papareact.com/gn7" />
      <Category title="title1" Imgurl="https://links.papareact.com/gn7" />
      <Category title="title1" Imgurl="https://links.papareact.com/gn7" />
      <Category title="title1" Imgurl="https://links.papareact.com/gn7" />

    </ScrollView>
  )
}