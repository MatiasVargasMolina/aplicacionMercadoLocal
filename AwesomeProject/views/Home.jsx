
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import Navbar from '../components/Navbar';
import axios from "axios";
import ProductoCardHorizontal from '../components/ProductoCardHorizontal';
import ProductoCardVertical from '../components/ProductoCardVertical';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation()
  function redirectTo (view, product){
    navigation.navigate(`${view}`, { product: product }); // Redirige a la ruta 'ViewForCategory'
  };
  const getProducts = async () => {
    try {
      const response = await axios.get("http://172.20.10.4:3000/productos");
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const renderProductHorizontal = ({ item }) => {
    return <ProductoCardHorizontal producto={item} />;
  };
  const renderProductVertical = ({ item }) => (
    <View >
        
      <TouchableOpacity onPress={()=>
      {
        redirectTo("Product",item )}} >
        <ProductoCardVertical producto={item} />
      </TouchableOpacity>
    </View>
  );
  return (
    <View>
      <Navbar />
      <Text style={styles.ofertasText}>Ofertas del día</Text>
      <View>
        <FlatList
          data={products}
          renderItem={renderProductHorizontal}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false} // oculta la barra de desplazamiento
          contentContainerStyle={styles.horizontalList} // estilos para el contenedor de la lista
        />
      </View>
      <FlatList style={styles.containerHome}
        data={products}
        renderItem={renderProductVertical}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        pagingEnabled={true}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  ofertasText: {
    marginTop: 110,
    marginHorizontal: 10,
    textAlign: "center",
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    borderBottomWidth: 2,
    borderBottomColor: 'blue'
  },
  horizontalList: {
    paddingHorizontal: 1,
    marginVertical: 10,
  },
});

export default Home;
