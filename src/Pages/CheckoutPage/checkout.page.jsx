import React from "react";
import { connect } from "react-redux";

import "./checkout.styles.scss";

import { selectCartItems,selectCartItemsTotal } from "../../redux/Cart/Cart-Selector";


import CheckoutItem from "../../Components/Checkout-Item/CheckoutItem.component";
import StripeCheckout from "react-stripe-checkout";

const CheckoutPage = ({ cartItems ,total}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">TOTAL: ${total}</div>
    <div className='test-warning'>
      *Please, use the Following test Credit card for Payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
    </div>
    <StripeCheckout price={total} />
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  total: selectCartItemsTotal(state),
});

export default connect(mapStateToProps)(CheckoutPage);
