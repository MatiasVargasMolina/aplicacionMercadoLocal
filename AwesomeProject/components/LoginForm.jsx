import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image,Text } from 'react-native';
import axios from "axios"
const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async() => {
    try{
      const responseToken = await axios.post("http://172.20.10.4:3000/get-token",{"username":formData.username,"password":formData.password});
      axios.defaults.headers.common['Authorization'] = `Bearer ${responseToken.data.token}`
      const responseProfile = await axios.get("https://mercado-local.com.ar/wp-json/wp/v3/users/me")
      console.log(responseProfile.data)

    }
    catch(error){
      console.log(error.error)
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerPromocion}>
        <Text style={styles.tituloPromocion}>Vender con nosotros es totalmente gratis</Text>
      </View>
      <View style={styles.containerImagen}>
      <Image style={styles.imagen} source={require("../assets/logo.png")} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        onChangeText={(text) => handleChange('username', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        onChangeText={(text) => handleChange('password', text)}
      />
      <View style={styles.containerImage}>

      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonTitle}>Iniciar Sesion</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    padding: 20
  },
  input: {
    width: '80%',
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  containerImagen: {
    width:"80%",
    paddingBottom:40,
    paddingTop:100,
    alignItems:"center"
  },
  imagen: {
    resizeMode: 'contain'
  },
  buttonTitle:{
    color: '#e35124',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:"center"
  },
  button:{
    borderWidth:1,
    width:"80%",
    padding:5,
    borderColor: '#ccc'
  },
  containerPromocion:{
    width:"100%",
    justifyContent:"center",
    borderWidth:1,
    borderRadius:5,
    shadowColor: 'rgba(0, 0, 0, 0.5)', // Color de la sombra
    shadowOffset: { width: 2, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 0.8, // Opacidad de la sombra
    shadowRadius: 4,
    height:50,
    backgroundColor:'#e35124',
    padding:2

  },
  tituloPromocion:{
    fontSize:15,
    fontWeight: 'bold',
    textAlign:"center",
    fontVariant:"bold"


  }
});

export default LoginForm;
