import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

function ViewForCategory({category}) {
    const [products,setProducts]=useState([]);
    const getProduct= async()=>{
        try{
            const response = await axios.post("http://172.20.10.4:3000/categoria1")
            setProducts(response.data)
        }
        catch(error){
            console.log(error);
        }
    }
    
    useEffect(()=>{
        getProduct();
    },[]
    )
  return (
      
      <View>{products.map((product)=>(
        <Text>
            {product.name}
        </Text>
      )
        )}</View>
  )
}

export default ViewForCategory