import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import {
  CartContainer,
  ItemCountContainer,
  ShoppingIcon,
} from './cart-icon.styles'

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount)
  const dispatch = useDispatch()

  return (
    <CartContainer onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon />
      <ItemCountContainer className='item-count'>
        {itemCount}
      </ItemCountContainer>
    </CartContainer>
  )
}

export default CartIcon
