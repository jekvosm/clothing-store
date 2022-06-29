import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import CartIcon from '../cart-icon/cart-icon.component'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './header.styles'

import { signOutStart } from '../../redux/user/user.action'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const hidden = useSelector(selectCartHidden)
  return (
    <HeaderContainer className='header'>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/shop'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={() => dispatch(signOutStart())}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  )
}

export default Header
