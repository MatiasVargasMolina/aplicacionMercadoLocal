import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';
import axios from "axios";
import ProductoCard from '../components/ProductoCard';

function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://172.20.10.4:3000/productos");
      setProducts(response.data);
      console.log(response.data[0].name);
    } catch (err) {
      console.log(err);
    }
  }
  const cardStyle = {
    width: '50%', // Ocupará la mitad del contenedor padre
    // Otros estilos que desees aplicar al ProductoCard
  };
  useEffect(() => {
    getProducts();
  }, []);

  const renderProduct = ({ item }) => (
    <ProductoCard producto={item} style={cardStyle} />
  );

  return (
    <View>
      <Navbar />
      <Text style={styles.ofertasText}>Ofertas del día</Text>
      <View>
      <FlatList
               style={styles.containerHome}
               data={products}
               renderItem={renderProduct}
               keyExtractor={(item) => item.id.toString()}
               horizontal={true}
               pagingEnabled={true}
      />
      </View>
      <FlatList              style={styles.containerHome}
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        pagingEnabled={true}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHome: {
  },
  ofertasText:{
    paddingTop:120,
    textAlign:"center",
    fontSize:30
    
  },
  containerHorizontal:{
    flex:1,
    height:100
  }

});

export default Home;
