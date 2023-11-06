import React, { useEffect, useState } from 'react'

function Category() {{
  const [categories,setCategories]=useState(Ñ);
}
    useEffect(()=>{
      const getCategories = async()=>{
        const response = await axios.get("http://172.20.10.4:3000/categories")
        setCategories(response.data)
    }
    getCategories()
    },[]
    )
  return (
    <div>Category</div>
  )
}

export default Category