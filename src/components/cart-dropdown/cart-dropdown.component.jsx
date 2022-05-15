import React from 'react'

import CartItem from '../cart-item/cart-item.component'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import {
  CartDropdownBox,
  CartItemsContainer,
  CartDropdownButton,
  EmptyMessageContainer,
} from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownBox>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout')
          dispatch(toggleCartHidden())
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownBox>
  )
}

export default CartDropdown
