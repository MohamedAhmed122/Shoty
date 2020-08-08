import React from "react";
import { connect } from "react-redux";

import "./Cart-Icon.styles.scss";

import { selectCartItemsCount } from "../../redux/Cart/Cart-Selector";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/Cart/Cart.Action";

const CartIcon = ({ toggleCartHidden, countItem }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{countItem}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = (state) => ({
  countItem: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
