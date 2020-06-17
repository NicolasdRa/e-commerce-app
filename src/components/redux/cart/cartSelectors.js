import { createSelector } from 'reselect'

// two types of selectors input & output

// input selector (it slices a piece of the state) it doesnt use createSelector
const selectCart = state => state.cart

// output selectors (use createSelector)
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
)
