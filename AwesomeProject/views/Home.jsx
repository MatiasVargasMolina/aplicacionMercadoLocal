import React, { useEffect, useState } from 'react'
import { View,Text, ScrollView } from 'react-native'
import Navbar from '../components/Navbar'
import axios from "axios"
import ProductoCard from '../components/ProductoCard'
function Home() {
  const [products,setProducts]=useState([])
  const getProducts = async()=>{
      try{
        const response=await axios.get("http://172.20.10.4:3000/productos");
        setProducts(response.data)
        console.log(response.data[0].name)

      }
      catch(err){
        console.log(err)
      }

  }
  useEffect(()=>{
    getProducts()
  },[])
  return (
    <View >
      <Navbar></Navbar>
      <ScrollView>
      {(products)?products.map((product)=>((product)?<ProductoCard producto={product}></ProductoCard>:<></> )):<></>}
      </ScrollView>
    </View>
    )
}


export default Home
