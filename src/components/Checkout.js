import React from 'react'

import { Button } from './'

// hardcoded amount (in US cents) to charge users
// you could set this variable dynamically to charge different amounts

// Below is where the checkout component is defined.
// It has several functions and some default state variables.
class Checkout extends React.Component {
  state = {
    disabled: false,
    buttonText: 'BUY NOW',
    paymentMessage: '',
  }

  resetButton() {
    this.setState({ disabled: false, buttonText: 'BUY NOW' })
  }

  componentDidMount() {
    this.stripeHandler = window.StripeCheckout.configure({
      // You’ll need to add your own Stripe public key to the `checkout.js` file.
      // key: 'pk_test_STRIPE_PUBLISHABLE_KEY',
      key: 'pk_test_kuhbxb0MMZsp6fj6aTNDnxUu',
      closed: () => {
        this.resetButton()
      },
    })
  }

  openStripeCheckout(event) {
    event.preventDefault()
    this.setState({ disabled: true, buttonText: 'WAITING...' })
    const { name, amount } = this.props
    this.stripeHandler.open({
      name: name,
      amount: amount,
      description: 'Human Condition Magazine',
      // shippingAddress: true,
      // billingAddress: true,
      // zipCode: true,
      token: token => {
        fetch(`AWS_LAMBDA_URL`, {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify({
            token,
            amount,
          }),
          headers: new Headers({
            'Content-Type': 'application/json',
          }),
        })
          .then(res => {
            console.log('Transaction processed successfully')
            this.resetButton()
            this.setState({ paymentMessage: 'Payment Successful!' })
            return res
          })
          .catch(error => {
            console.error('Error:', error)
            this.setState({ paymentMessage: 'Payment Failed' })
          })
      },
    })
  }

  render() {
    return (
      <div>
        <Button
          onClick={event => this.openStripeCheckout(event)}
          disabled={this.state.disabled}
        >
          {this.state.buttonText}
        </Button>
        {this.state.paymentMessage}
      </div>
    )
  }
}

export default Checkout
