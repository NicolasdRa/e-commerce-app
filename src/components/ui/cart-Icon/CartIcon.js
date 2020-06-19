import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ReactComponent as ShoppingIcon } from '../../../assets/cart.svg'
import { toggleCartHidden } from '../../redux/cart/cartActions'
import { selectCartItemsCount } from '../../redux/cart/cartSelectors'
import './CartIcon.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
