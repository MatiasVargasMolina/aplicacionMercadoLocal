import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Modal, TextInput } from 'react-native';

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
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonPrimaryText}>Menú</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar..."
          placeholderTextColor="#ccc"
          value={searchText}
          onChangeText={setSearchText}
        />
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
  buttonPrimary: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#262fad',
    borderColor: '#007BFF', // Color Primary de Bootstrap
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
},
buttonPrimaryText: {
    color: '#edf3ff',
    fontSize: 16,
},
  searchInput: {
    flex: 1,
    height: 35,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
    backgroundColor: '#fff',
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
