import React from 'react';
import { View, FlatList, Image, Dimensions, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  { key: 'image1', type: 'image', source: require('../assets/cat-almacen-mercado-local.webp') },
  { key: 'image2', type: 'image', source: require('../assets/cat-almacen-mercado-local-1.webp') },
  { key: 'image3', type: 'image', source: require('../assets/cat-autos-y-motos-mercado-local.webp') },
  { key: 'image4', type: 'image', source: require('../assets/cat-bebes-y-mamas-mercado-local.webp') },
];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Message = () => {
  const itemWidth = windowWidth;

  const renderItem = ({ item }) => {
      return <Image source={item.source} style={styles.image} />;
    }

  return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        horizontal={true}
        pagingEnabled={true}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
  },
  iconContainer: {
    width: windowWidth / 5, // Ajusta el tamaño del contenedor del icono según tus necesidades
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: windowWidth,

    resizeMode: 'contain',
  },
});

export default Message;
