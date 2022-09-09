import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  return (
    <View className="absolute z-50 w-full bottom-10">
      <TouchableOpacity className="flex-row mx-3 bg-[#00CCBB] p-4 rounded-lg items-center space-x-1">
        <Text className="text-lg font-extrabold text-white bg-[#01A296] py-1 px-2 w-10 text-center">
          {items.length}
        </Text>
        <Text className="flex-1 text-lg font-extrabold text-center text-white">
          View Basket
        </Text>
        <Text className="text-lg font-extrabold text-white">
          <Currency quantity={basketTotal} currency="CNY" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
