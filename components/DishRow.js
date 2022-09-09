import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

const DishRow = ({ key, id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity
        className={`p-4 bg-white border border-gray-200 ${
          isPressed && "border-b-0"
        }`}
        onPress={() => setIsPressed(!isPressed)}
      >
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
            className="w-20 h-20 bg-gray-300 border border-gray-200 rounded"
          />
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="px-4 bg-white">
          <View className="flex-row items-center pb-3 space-x-2">
            <TouchableOpacity>
              <MinusCircleIcon color="#00ccbb" size={40} />
            </TouchableOpacity>

            <Text>0</Text>

            <TouchableOpacity>
              <PlusCircleIcon color="#00ccbb" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
