import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';

const Navbar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleNavigate = (option) => {
    setSelectedOption(option);
    // Lógica para manejar la navegación a la opción seleccionada
    // ...
    setModalVisible(false); // Cierra el modal después de seleccionar una opción
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Menú</Text>
        </TouchableOpacity>
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
  },
  navbar: {
    height: 100,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    paddingTop: 40,
    color: '#0000ff',
    fontSize: 18,
    
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
