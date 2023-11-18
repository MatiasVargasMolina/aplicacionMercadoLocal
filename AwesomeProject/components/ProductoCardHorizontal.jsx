import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ProductoCardHorizontal = ({ producto }) => {
  return (
    <View style={styles.card}>
      <Image 
        style={styles.imagen} 
        source={{ uri: producto.images[0].src }} 
      />
      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>50% OFF</Text>
      </View>
      <Text style={styles.precio}>${producto.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width / 3 - 20,
    borderRadius: 10,
    borderWidth:1,
    borderColor: '#ccc',
        shadowColor: 'rgba(0, 0, 0, 0.5)', // Color de la sombra
    shadowOffset: { width: 2, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 0.8, // Opacidad de la sombra
    shadowRadius: 4,
    padding: 0,
    margin: 10,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  imagen: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10
  },
  discountBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    padding: 5,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: '10%',
  },
  discountText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  precio: {
    fontSize: 30,
    color: 'red',
    textAlign: 'left'
  },
});

export default ProductoCardHorizontal;

