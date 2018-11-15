const dotenv = require("dotenv");
if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config();
}

const key = process.env.ENVIRONMENT !== 'production' ? process.env.STRIPE_SECRET_KEY_TEST : process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(key);

module.exports.handler = (event, context, callback) => {
  const requestBody = JSON.parse(event.body);
  const token = requestBody.token;
  const args = requestBody.args;
  const products = requestBody.products;

  stripe.orders.create({
    currency: 'usd',
    email: token.email,
    items: products,
    shipping: {
      name: args.shipping_name,
      address: {
        line1: args.shipping_address_line1,
        line2: args.shipping_address_line2,
        city: args.shipping_address_city,
        state: args.shipping_address_state,
        postal_code: args.shipping_address_zip,
        country: args.shipping_address_country_code
      }
    }
  })
    .then((order) => {
      return stripe.orders.pay(order.id, {
        source: token.id,
      })
        .then((charge) => { // Success response
          console.log(charge);
          const response = {
            statusCode: 200,
            headers: {
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
              message: `Charge processed succesfully!`,
              charge
            })
          };
          callback(null, response);
        })
        .catch((err) => { // Error response
          console.log(err);
          const response = {
            statusCode: 500,
            headers: {
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
              error: err.message
            })
          };
          callback(null, response);
        });
    });
};
