import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./CartDropdown.styles.scss";

import { selectCartItems } from "../../redux/Cart/Cart-Selector";
import { toggleCartHidden } from "../../redux/Cart/Cart.Action";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../Cart-Item/cart-Item.component";

const CartDropdown = ({ cartItems, toggleCartHidden, history }) => (
  <div className="cart-dropdown">
    {cartItems.length > 0 ? (
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
    ) : (
      <span className="empty-msg">Your cart is empty </span>
    )}

    <CustomButton
      onClick={() => {
        history.push("/checkout");
        toggleCartHidden();
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
