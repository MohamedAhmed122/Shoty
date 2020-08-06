import React, { Fragment } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { auth } from "../../firebase/firebase.config";

const Navbar = ({ currentUser }) => (
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
          <img src={currentUser.photoURL} alt='photol'className='option' style={{height:'2.5rem', borderRadius: '50%',padding:'0.5rem' }}  />
          <div style={{padding:0}} className="option">{currentUser.displayName}</div>
        </Fragment>
      ) : (
        <Link className="option" to="/sign">
          Sign In
        </Link>
      )}
    </div>
  </div>
);

export default Navbar;
