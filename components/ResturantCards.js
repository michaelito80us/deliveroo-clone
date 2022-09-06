import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

const ResturantCards = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  description,
  short_description,
  dishes,
  long,
  lat
}) => {

  const navigation = useNavigation()

  return (
    <TouchableOpacity
      className="mb-2 mr-3 bg-white shadow"
      onPress={() =>
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          description,
          short_description,
          dishes,
          long,
          lat
        })
      }
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="w-64 rounded-sm h-36"
      />
      <View className="px-3 pb-4">
        <Text className="pt-2 text-lg font-bold">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> ⋅ {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby ⋅ {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ResturantCards
