import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient, { urlFor } from "../sanity";


const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == "category"]
    `).then((data) => {
      setCategories(data)
    })
  }, [])


  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* category card */}
      {categories?.map((category) => (
        <CategoryCard
          imgUrl={urlFor(category.image).url()}
          // imgUrl="https://links.papareact.com/gn7"
          title={category.name}
          key={category._id}
        />
      ))}
      {/* <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 1"/> */}
      {/* <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 2"/> */}
      {/* <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 3"/> */}
      {/* <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 4"/> */}
      {/* <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 5"/> */}
    </ScrollView>
  );
}

export default Categories
