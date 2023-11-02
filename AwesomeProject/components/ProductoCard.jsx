import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ProductoCard = ({ producto,styke }) => {
  return (
    <View style={{ ...styles.card, width: width - 20 }}>
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
    margin: 10,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1, // Ocupa la mitad del contenedor
  },
  rightContainer: {
    flex: 1, // Ocupa la otra mitad del contenedor
    marginLeft: 10, // Espacio entre la imagen y el texto
    justifyContent: 'center', // Centra verticalmente el texto
  },
  imagen: {
    width: '100%', // La imagen ocupará todo el espacio disponible en el contenedor
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
    fontSize: 40,
    color: 'green',
  },
});

export default ProductoCard;
