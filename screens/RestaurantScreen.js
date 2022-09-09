import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";

const RestaurantScreen = () => {
  const {
    params: {
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
      lat,
    },
  } = useRoute();

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <TouchableOpacity
            className="absolute z-10 flex-row items-center justify-between p-2 bg-gray-100 rounded-full left-5 top-14"
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-64 bg-gray-300"
          />
        </View>

        <View className="bg-white">
          <View className="px-4">
            <Text className="pt-4 text-3xl font-bold">{title}</Text>
            <View className="flex-row items-center my-1 space-x-2">
              <StarIcon color="#4d7c0f" size={22} />
              <Text className="mr-2 text-xs text-gray-500">
                <Text className="text-lime-700">{rating}</Text> ⋅ {genre}
              </Text>
              <MapPinIcon color="gray" opacity={0.4} size={22} />
              <Text className="text-xs text-gray-500">Nearby ⋅ {address}</Text>
            </View>
            <Text className="py-4 text-sm text-gray-500">
              {short_description}
            </Text>
          </View>
          <TouchableOpacity className="flex-row items-center p-4 space-x-2 border-gray-300 border-y">
            <QuestionMarkCircleIcon size={20} color="gray" opacity={0.4} />
            <Text className="flex-1 ml-2 text-base font-bold">
              Have a food allergy?
            </Text>
            <ChevronRightIcon size={22} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 text-xl font-bold">Menu</Text>

          {/* dishes */}
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
