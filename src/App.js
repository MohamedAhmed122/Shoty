import React, { Component } from "react";

import "./App.css";
import HomePage from "./Pages/HomePage/HomePage.component";
import { Switch, Route } from "react-router-dom";
import ContactPage from "./Pages/ContactPage/ContactPage";
import SignPage from "./Pages/SignPage/Sign-In&Up-Page";
import ShopPage from "./Pages/ShopPage/ShopPage";
import Navbar from "./Layout/Navbar/navbar";
import { auth, createUserProfileDocument } from "./firebase/firebase.config";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Navbar currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/sign" component={SignPage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
