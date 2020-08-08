import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./navbar.scss";

import { selectCurrentUser } from "../../redux/user/User-Selector";
import { selectCartHidden } from "../../redux/Cart/Cart-Selector";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.config";
import CartIcon from "../../Components/Cart-Icon/Cart-Icon.component";
import CartDropdown from "../../Components/CartDropdown/CartDropdown.component";

const Navbar = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
      {currentUser ? (
        <Fragment>
          <Link to="/sign" className="option" onClick={() => auth.signOut()}>
            Sign Out
          </Link>
          <div className="option">{currentUser.displayName}</div>
        </Fragment>
      ) : (
        <Link className="option" to="/sign">
          Sign In
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state),
});

export default connect(mapStateToProps)(Navbar);
