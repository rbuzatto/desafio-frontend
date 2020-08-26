import { ADD_TO_CART, SUBTRACT_FROM_CART, REMOVE_FROM_CART } from 'constants/index'
import { getCachedValue, setCachedValue } from 'helper/cacheItem'

export const initialState = getCachedValue('cart') || {
  itemsIds: [],
  quantityById: {},
}

const cartReducer = (state = initialState, { type, productId }) => {
  switch (type) {
    case ADD_TO_CART: {
      const quantity = state.quantityById[productId] ? ++state.quantityById[productId] : 1
      const quantityById = { ...state.quantityById, [productId]: quantity }
      const itemsIds = state.itemsIds.includes(productId)
        ? state.itemsIds
        : [...state.itemsIds, productId]
      const nextState = { itemsIds, quantityById }
      setCachedValue('cart', nextState)
      return nextState
    }
    case SUBTRACT_FROM_CART: {
      const quantity = state.quantityById[productId] > 0 ? --state.quantityById[productId] : 0
      if (quantity === 0) {
        const itemsIds = state.itemsIds.filter(id => id !== productId)
        const { [productId]: _, ...quantityById } = state.quantityById
        const nextState = { itemsIds, quantityById }
        setCachedValue('cart', nextState)
        return nextState
      }
      const quantityById = { ...state.quantityById, [productId]: quantity }
      const itemsIds = state.itemsIds.includes(productId)
        ? state.itemsIds
        : [...state.itemsIds, productId]
      const nextState = { itemsIds, quantityById }
      setCachedValue('cart', nextState)
      return nextState
    }
    case REMOVE_FROM_CART: {
      const itemsIds = state.itemsIds.filter(id => id !== productId)
      const { [productId]: _, ...quantityById } = state.quantityById
      const nextState = { itemsIds, quantityById }
      setCachedValue('cart', nextState)
      return nextState
    }
    default:
      return state
  }
}

export default cartReducer
