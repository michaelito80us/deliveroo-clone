import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    // fetch stuff from the backend
    sanityClient
      .fetch(
        `
      *[_type == "featured"] {
        ...,
        restaurants[] -> {
          ...,
          dishes[] -> {}
        }
      }
    `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  // console.log({featuredCategories});

  return (
    <SafeAreaView className="pt-5 bg-white">
      {/* header */}
      <View className="flex-row items-center pb-3 mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="p-4 bg-gray-300 rounded-full w-7 h-7"
        />
        <View className="flex-1">
          <Text className="text-xs font-bold text-gray-400">Deliver Now!</Text>
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
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* body */}
      <View className="mb-10 pb-36">
        <ScrollView className=" bg-slate-100">
          {/* categories */}
          <Categories />

          {/* use the ? operator to check if the array is empty */}
          {
            /* JSX */
            featuredCategories?.map((category) => (
              <FeaturedRow
                key={category._id}
                id={category._id}
                title={category.name}
                description={category.short_description}
              />
            ))
          }

          {/* Featured */}
          {/* <FeaturedRow
          id="1"
          title="Featured"
          description="Paid placements from our Partners"
          featuredCategory="featured"
        /> */}

          {/* Tasty Discounts */}
          {/* <FeaturedRow
          id="2"
          title="Tasty Discounts"
          description="Everyone's been enjoying lthese juicy discounts!"
          featuredCategory="discounts"
        /> */}

          {/* Offers near you! */}
          {/* <FeaturedRow
          id="3"
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
          featuredCategory="offers"
        /> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
