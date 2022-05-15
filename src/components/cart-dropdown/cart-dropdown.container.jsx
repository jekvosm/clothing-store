import { connect } from 'react-redux'
import { compose } from 'redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'

import CartDropdown from './cart-dropdown.component'
import { withRouter } from 'react-router-dom'

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

const CartDropdownContainer = compose(
  connect(mapStateToProps),
  withRouter
)(CartDropdown)

export default CartDropdownContainer
