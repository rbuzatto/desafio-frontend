import { useState, useEffect } from 'react'
import request from 'services/request'

const useProducts = () => {
  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    try {
      const { data } = await request.get('/products')
      setProducts(data.products)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return [products]
}

export default useProducts
