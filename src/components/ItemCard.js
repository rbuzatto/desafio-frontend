import React, { useContext } from 'react'
import { ADD_TO_CART, SUBTRACT_FROM_CART, REMOVE_FROM_CART } from 'constants/index'
import { CartContext } from 'App'
import PropTypes from 'prop-types'

const ItemCard = ({ productId, quantity }) => {
  const { dispatch } = useContext(CartContext)

  const addToCart = () => dispatch({ type: ADD_TO_CART, productId })
  const subtractFromCart = () => dispatch({ type: SUBTRACT_FROM_CART, productId })
  const removeFromCart = () => dispatch({ type: REMOVE_FROM_CART, productId })
  return (
    <div>
      my product id {productId}: quantity {quantity}
    </div>
  )
}

ItemCard.propTypes = {
  productId: PropTypes.number,
  quantity: PropTypes.number,
}

export default ItemCard
