import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

import './StripeCheckoutButton.scss'

const StripeCheckoutButton = ({ price }) => {
  const fromEuroToCent = price * 100
  const publishableKey = 'pk_test_2vmmNCYAsx1yhdVUHLhYyIwE'

  const onToken = token => {
    console.log(token)
    alert('Payment successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='NdR'
      billingAddress
      shippingAddress
      description={`Your total is € ${price}`}
      image='https://svgshare.com/i/CUz.svg'
      currency='EUR'
      amount={fromEuroToCent}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
