import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import logo from '../../assets/crown.svg'

import './stripe-button.styles.scss'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51JolBdC9pkdMk5XRKkzQ9FAsMkZYMSLGFlp5V2iUqTwZaS419JlpZ3gaYgKyhlkfPg449350UJL4AzDPSs4SMaoe00QSP07C2D'

  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Clothing Store'
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Play Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
