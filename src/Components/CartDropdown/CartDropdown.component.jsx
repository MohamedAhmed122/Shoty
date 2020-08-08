import React from "react";
import { connect } from "react-redux";

import "./CartDropdown.styles.scss";

import { selectCartItems } from "../../redux/Cart/Cart-Selector";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../Cart-Item/cart-Item.component";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
