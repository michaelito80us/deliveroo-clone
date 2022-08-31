import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResturantCards from './ResturantCards'

const FeaturedRow = ({id, title, description, featuredCategory}) => {
  return (
    <View>
      <View className='flex-row items-center justify-between px-4 mt-4'>
        <Text className='text-lg font-bold'>{title}</Text>
        <ArrowRightIcon color='#00CCBB' />
      </View>
      <Text className='px-4 text-xs text-gray-400'>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
        >

        {/* ResturantCards */}
        <ResturantCards
          id="1"
          imgUrl="https://links.papareact.com/gn7"
          title="The Best Burgers"
          rating={4.5}
          genre="Burgers"
          address="1234 Main St"
          description="This is a description"
          short_description="This is a short description"
          dishes={['Burgers', 'Fries', "Shakes"]}
          long={-122.4324}
          lat={37.78825}
        />
        <ResturantCards
          id="1"
          imgUrl="https://links.papareact.com/gn7"
          title="The Best Burgers"
          rating={4.5}
          genre="Burgers"
          address="1234 Main St"
          description="This is a description"
          short_description="This is a short description"
          dishes={['Burgers', 'Fries', "Shakes"]}
          long={-122.4324}
          lat={37.78825}
        />
        <ResturantCards
          id="1"
          imgUrl="https://links.papareact.com/gn7"
          title="The Best Burgers"
          rating={4.5}
          genre="Burgers"
          address="1234 Main St"
          description="This is a description"
          short_description="This is a short description"
          dishes={['Burgers', 'Fries', "Shakes"]}
          long={-122.4324}
          lat={37.78825}
        />


      </ScrollView>

    </View>
  )
}

export default FeaturedRow
