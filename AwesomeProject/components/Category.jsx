import React, { useEffect, useState } from 'react'
import { View,Text, ScrollView,StyleSheet, TouchableOpacity,FlatList } from 'react-native';
import axios from "axios"
import { useNavigation } from '@react-navigation/native';
function Category() {
  const [categories,setCategories]=useState([]);
  const navigation = useNavigation()
  function redirectTo (view){
    navigation.navigate(view); // Redirige a la ruta 'ViewForCategory'
  };
const getCategories = async()=>{
  
  const response = await axios.get("http://172.20.10.4:3000/categories")
  console.log(response.data)
  setCategories(response.data)
}
    useEffect(()=>{
    getCategories()
    },[]
    )
    const renderCategoriaVertical = ({ item }) => {
      return <TouchableOpacity onPress={()=>{redirectTo("Home")}}  style={styles.containerCategory}><Text>{item.name} </Text></TouchableOpacity>;
    };
  return (
    <FlatList
    data={categories}
    renderItem={renderCategoriaVertical}
    keyExtractor={(item) => item.id.toString()}
    horizontal={true}
    pagingEnabled={true}
    showsHorizontalScrollIndicator={false} // oculta la barra de desplazamiento
    contentContainerStyle={styles.horizontalList} // estilos para el contenedor de la lista
  />
  )
}

const styles = StyleSheet.create({
  containerCategory: {
    borderWidth:0.2,
    padding:9,
  }
});
export default Category