import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.hamburgerButton}>
        <MaterialCommunityIcons name="menu" size={30} color="white" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Estoy buscando..." />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#e35124',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 90,
  },
  inputContainer: {
    flex: 1,
    height: 80,
    paddingRight: 4,
    paddingTop:20
  },
  input: {
    height: 40,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  hamburgerButton: {
    marginRight: 10,
  },
});

export default Navbar;
