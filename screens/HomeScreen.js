import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from '../components/categories';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [])

  return (
    <SafeAreaView className="pt-5 bg-white">
      {/* header */}
      <View className="flex-row items-center pb-3 mx-4 space-x-2">
        <Image
          source={{
            url: "https://links.papareact.com/wru",
          }}
          className="p-4 bg-gray-300 rounded-full w-7 h-7"
        />
        <View className="flex-1">
          <Text className="text-xs font-bold text-gray-400">
            Deliver Now!
          </Text>
          <Text className="text-xl font-bold">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* search */}
      <View className="flex-row items-center pb-2 mx-4 space-x-2">
        <View className="flex-row flex-1 p-3 space-x-2 bg-gray-200 rounded">
          <MagnifyingGlassIcon size={20} color="grey" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType='default'
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* body */}
      <ScrollView className='bg-slate-100'>
          {/* categories */}
          <Categories />

          {/* featured rows */}

      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen
