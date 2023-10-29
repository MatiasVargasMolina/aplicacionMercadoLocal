import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Navbar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleNavigate = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.hamburgerButton}>
          <View style={styles.line}></View>
          <View style={styles.line}></View>
          <View style={styles.line}></View>
        </TouchableOpacity>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar..."
            placeholderTextColor="#ccc"
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Icon name="search" size={20} color="#ccc" />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => handleNavigate('Home')}>
              <Text style={styles.modalOption}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigate('Productos')}>
              <Text style={styles.modalOption}>Productos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigate('Categorías')}>
              <Text style={styles.modalOption}>Categorías</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  navbar: {
    paddingTop: 30,
    height: 100,
    backgroundColor: '#576efd',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hamburgerButton: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight:10,
    height: 25, // altura total del botón
  },
  line: {
    height: 3, // grosor de la línea
    backgroundColor: '#FFFFFF', // color blanco
    width: 30, // ancho de la línea
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
    marginHorizontal: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  searchInput: {
    flex: 1,
    height: 35,
    padding: 10,
  },
  searchButton: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 100, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalOption: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default Navbar;
