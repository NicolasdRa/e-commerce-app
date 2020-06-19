import React from 'react'
import { connect } from 'react-redux'
import {
  addItem,
  decrementOrRemoveItem,
  removeItem
} from '../../redux/cart/cartActions'

import './CheckoutItem.scss'

const CheckoutItem = ({
  cartItem,
  removeItem,
  addItem,
  decrementOrRemoveItem
}) => {
  const { name, imageUrl, quantity, price } = cartItem
  console.log(cartItem)
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => decrementOrRemoveItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item)),
  decrementOrRemoveItem: item => dispatch(decrementOrRemoveItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
