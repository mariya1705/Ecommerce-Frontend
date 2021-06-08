import React from "react"

import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import CheckoutForm from "./CheckoutForm"

const stripe = loadStripe(
  "pk_test_51J07ENBQjV5AaYPta9WNB0E9NnDjcRxIwFfVDgnVmV4S01dwLvJUbFZ1E6NAbUMZvMFwXEow9QaoHLRcrpMHExJI00vv8yDSR7"
)

export default () => (
  <div>
    <Elements stripe={stripe}>
      <CheckoutForm />
    </Elements>
  </div>
)
