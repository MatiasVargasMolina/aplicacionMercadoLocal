import React, { useEffect, useState  } from 'react'
import { View,Text, ScrollView,TouchableOpacity } from 'react-native'
import axios from "axios"
import Navbar from '../components/Navbar';

export default function Categories() {
  const renderCategoriaVertical = ({ item }) => {
    return <><Text>{item.name} </Text></>;
  };
    const navigation = useNavigation()
    function redirectTo (view){
      navigation.navigate(view); // Redirige a la ruta 'ViewForCategory'
    };
    const [categories,setCategories]=useState([]);
    const getProduct= async()=>{
        try{
            const response = await axios.get("http://172.20.10.4:3000/categories")
            setCategories(response.data)
        }
        catch(error){
            console.log(error);
        }
    }
    
    useEffect(()=>{
        getProduct();
    },[]
    )
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
