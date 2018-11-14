import React from 'react'

import { Button } from './'

const api = process.env.NODE_ENV === 'development' ? 'http://localhost:9000' : 'https://humanconditionmag.com/.netlify/functions'
const key = process.env.NODE_ENV === 'development' ? 'pk_test_Y5hzahRkXx9K3ICjEAILkbtI' : 'pk_live_3PrG0lEhyYW5wV1a7Xkr491G'

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
      key: key,
      closed: () => {
        this.resetButton()
      },
    })
  }

  openStripeCheckout(event) {
    event.preventDefault()
    this.setState({ disabled: true, buttonText: 'WAITING...' })
    const { name, amount, sku } = this.props
    this.stripeHandler.open({
      name: name,
      amount: amount,
      description: 'Human Condition Magazine',
      shippingAddress: true,
      billingAddress: true,
      zipCode: true,
      allowRememberMe: false,
      token: (token, args) => {
        fetch(api + '/createcharge', { // Backend API url
          method: 'POST',
          body: JSON.stringify({
            token,
            args,
            products: [{
              type: 'sku',
              parent: sku,
              quantity: 1
            }]
          }),
        })
          .then((data) => {
            console.log('onToken'); // Logs for ease of debugging
            console.log(data);
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
          variant="outlined"
          size="large"
          fullWidth
        >
          {this.state.buttonText}
        </Button>
        {this.state.paymentMessage}
      </div>
    )
  }
}

export default Checkout
