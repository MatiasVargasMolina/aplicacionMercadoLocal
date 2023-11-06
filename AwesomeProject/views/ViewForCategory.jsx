import React, { useEffect, useState  } from 'react'
import { View,Text } from 'react-native'
import axios from "axios"
function ViewForCategory({category}) {
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