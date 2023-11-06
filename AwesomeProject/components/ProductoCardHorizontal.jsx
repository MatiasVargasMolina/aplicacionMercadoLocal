import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ProductoCardHorizontal = ({ producto }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.imagen} source={{ uri: producto.images[0].src }} />
      <Text style={styles.precio}>${producto.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width / 3 - 20, // Así 3 cartas se ajustarán perfectamente en una fila
    borderRadius: 10,
    padding: 0,
    margin: 10, // Centra los elementos horizontalmente
    justifyContent: 'center', // Centra los elementos verticalmente
    backgroundColor:"white"
  },
  imagen: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10 // Espacio entre la imagen y el texto
  },
  titulo: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center', // Centra el texto horizontalmente
    marginBottom: 5, // Espacio entre el título y el precio
  },
  precio: {
    fontSize: 30,
    color: 'red',
    textAlign:"left"
 // Centra el texto horizontalmente
  },
});

export default ProductoCardHorizontal;