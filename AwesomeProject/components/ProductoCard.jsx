import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProductoCard = ({ producto }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.imagen} source={{ uri: producto.images[0].src }} />
      <Text style={styles.titulo}>{producto.name}</Text>
      <Text style={styles.precio}>Precio: ${producto.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  imagen: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  precio: {
    fontSize: 16,
    color: 'green',
  },
});

export default ProductoCard;
