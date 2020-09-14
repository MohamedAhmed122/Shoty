import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { GlobalStyle } from './GlobalStyle'

import { selectCurrentUser } from "./redux/user/User-Selector";
import HomePage from "./Pages/HomePage/HomePage.component";
import ContactPage from "./Pages/ContactPage/ContactPage";
import SignPage from "./Pages/SignPage/Sign-In&Up-Page";
import ShopPage from "./Pages/ShopPage/ShopPage";
import Navbar from "./Layout/Navbar/navbar";
import { auth, createUserProfileDocument } from "./firebase/firebase.config";
import { setCurrentUser } from "./redux/user/User-action";
import CheckoutPage from "./Pages/CheckoutPage/checkout.page";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      this.props.setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={ContactPage} />
          <Route
            exact
            path="/sign"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignPage />
            }
          />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
