import React, { useContext } from 'react'
import ItemCard from './ItemCard'
import { CartContext } from 'App'

const ItemCardList = () => {
  const { cart } = useContext(CartContext)
  const { itemsIds, quantityById } = cart
  const renderItems = () => {
    return itemsIds.map(id => <ItemCard productId={id} quantity={quantityById[id]} key={id} />)
  }
  return renderItems()
}

export default ItemCardList
