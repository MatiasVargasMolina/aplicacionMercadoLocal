import React from 'react';
import { View, Text, StyleSheet, Image,Dimensions  } from 'react-native';

const ProductoCardVertical = ({ producto }) => {
  return (
    <View style={styles.card}>
      <View style={styles.leftContainer}>
        <Image style={styles.imagen} source={{ uri: producto.images[0].src }} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.titulo}>{producto.name}</Text>
        <Text style={styles.precio}>${producto.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor:"white",
    flexDirection: 'row',
    margin: 10,
    width: '90%',
    alignSelf: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.5)', // Color de la sombra
    shadowOffset: { width: 2, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 0.8, // Opacidad de la sombra
    shadowRadius: 4,
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  imagen: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  titulo: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  precio: {
    fontSize: 20,
    color: 'green',
  },
});

export default ProductoCardVertical;