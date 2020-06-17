import React from 'react'
import { connect } from 'react-redux'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../carItem/CartItem'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import './CartDropDown.scss'

const CartDropDown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown)
