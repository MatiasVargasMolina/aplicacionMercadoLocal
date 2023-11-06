import React, { useEffect, useState  } from 'react'
import { View,Text } from 'react-native'
import axios from "axios"
export default function Categories() {
    const [categories,setCategories]=useState([]);
    const getProduct= async()=>{
        try{
            const response = await axios.get("http://172.20.10.4:3000/categories")
            setCategories(response.data)
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
    <View>
        {categories.map((category)=>(<Text>{category.name} </Text>)
        )}
    </View>
  )
}
