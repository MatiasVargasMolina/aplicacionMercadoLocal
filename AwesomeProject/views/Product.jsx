import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Puedes elegir cualquier biblioteca de iconos que prefieras
import { useNavigation } from '@react-navigation/native';
function Product() {
  const navigation = useNavigation()
  function redirectTo(view) {
    navigation.navigate(view); // Redirige a la ruta 'ViewForCategory'
  };
  const route = useRoute();
  console.log("Aca el nombre" + route.params.product.images[0].src)
  const { product } = route.params;
  return (
    <View style={styles.container}>
            <View>
          
        <TouchableOpacity onPress={()=>
          redirectTo(Home)} style={{ padding: 10 }}>
            <Text><Icon name="arrow-left" size={30} color="#000" /></Text>
        </TouchableOpacity>
            </View>
      <View>
      <Text style={styles.productName}>{product.name}</Text>
      <Image source={{ uri: "" }} style={styles.productImage} />
      <Text style={styles.productPrice}>Precio: ${product.price}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.productCategory}>Categoría: {product.categories[0].name}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  productImage: {
    marginBottom: 20,
    borderRadius: 10,
  },
  productPrice: {
    fontSize: 18,
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  productCategory: {
    fontSize: 16,
    marginBottom: 10,
  },
  productTags: {
    fontSize: 16,
    marginBottom: 20,
  },
});
export default Product 