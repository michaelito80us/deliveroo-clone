import { View, Text, Image } from "react-native";
import React from "react";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";

const DishRow = ({ key, id, name, description, price, image }) => {
  return (
    <View className="p-4 bg-white">
      <View className="flex-row">
        <View className="flex-col flex-1">
          <Text className="mb-1 text-lg font-semibold">{name}</Text>
          {/* <Text className="pr-6 text-sm text-gray-500">Just checking to see what happens if the description of the dish is very long, i want to see the effect this has on the rendering of the dish description and how it affects the position of the photo</Text> */}

          <Text className="pr-6 text-sm text-gray-400">{description}</Text>
          <Text className="mt-2 text-base text-gray-400">
            <Currency quantity={price} currency="EUR" />
          </Text>
        </View>
        <Image
          source={{
            uri: urlFor(image).url(),
          }}
          className="w-20 h-20 bg-gray-300 rounded"
        />
      </View>
    </View>
  );
};

export default DishRow;
