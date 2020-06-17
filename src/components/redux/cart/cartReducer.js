import { cartTypes } from './cartTypes'
import { addItemToCart, decrementOrRemoveItemFromCart } from './cartUtils'

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case cartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case cartTypes.DECREMENT_OR_REMOVE_ITEM:
      return {
        ...state,
        cartItems: decrementOrRemoveItemFromCart(
          state.cartItems,
          action.payload
        )
      }
    case cartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      }
    default:
      return state
  }
}

export default cartReducer
