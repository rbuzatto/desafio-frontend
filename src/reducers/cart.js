import { ADD_TO_CART, SUBTRACT_FROM_CART, REMOVE_FROM_CART } from 'constants/index'

export const initialState = {
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
      return { itemsIds, quantityById }
    }
    case SUBTRACT_FROM_CART: {
      const quantity = state.quantityById[productId] > 0 ? --state.quantityById[productId] : 0
      if (quantity === 0) {
        const itemsIds = state.itemsIds.filter(id => id !== productId)
        const { [productId]: _, ...quantityById } = state.quantityById
        return { itemsIds, quantityById }
      }
      const quantityById = { ...state.quantityById, [productId]: quantity }
      const itemsIds = state.itemsIds.includes(productId)
        ? state.itemsIds
        : [...state.itemsIds, productId]
      return { itemsIds, quantityById }
    }
    case REMOVE_FROM_CART: {
      const itemsIds = state.itemsIds.filter(id => id !== productId)
      const { [productId]: _, ...quantityById } = state.quantityById
      return { itemsIds, quantityById }
    }
    default:
      return state
  }
}

export default cartReducer
