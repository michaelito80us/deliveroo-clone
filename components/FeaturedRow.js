import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResturantCards from './ResturantCards'
import sanityClient from '../sanity'

const FeaturedRow = ({id, title, description, featuredCategory}) => {

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == "featured" && _id == $id] {
        ...,
        restaurants[] -> {
          ...,
          dishes[] ->,
          type -> {
            name
          }
        },
      }[0]
    `, { id }).then(data => {
      setRestaurants(data?.restaurants)
    })
  },[id])

  console.log({restaurants})

  return (
    <View>
      <View className="flex-row items-center justify-between px-4 mt-4">
        <Text className="text-lg font-bold">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="px-4 text-xs text-gray-400">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* ResturantCards */}

        {restaurants?.map((restaurant) => (
          <ResturantCards
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type.name}
            address={restaurant.address}
            description={restaurant.description}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
        {/* <ResturantCards
          id="1"
          imgUrl="https://links.papareact.com/gn7"
          title="The Best Burgers in town"
          rating={4.5}
          genre="Burgers"
          address="1234 Main St"
          description="This is a description"
          short_description="This is a short description"
          dishes={["Burgers", "Fries", "Shakes"]}
          long={-122.4324}
          lat={37.78825}
        /> */}
        {/* <ResturantCards
          id="1"
          imgUrl="https://links.papareact.com/gn7"
          title="The Best Burgers"
          rating={4.5}
          genre="Burgers"
          address="1234 Main St"
          description="This is a description"
          short_description="This is a short description"
          dishes={["Burgers", "Fries", "Shakes"]}
          long={-122.4324}
          lat={37.78825}
        /> */}
        {/* <ResturantCards
          id="1"
          imgUrl="https://links.papareact.com/gn7"
          title="The Best Burgers"
          rating={4.5}
          genre="Burgers"
          address="1234 Main St"
          description="This is a description"
          short_description="This is a short description"
          dishes={["Burgers", "Fries", "Shakes"]}
          long={-122.4324}
          lat={37.78825}
        /> */}
      </ScrollView>
    </View>
  );
}

export default FeaturedRow
