import React, { Component } from "react";

import "./App.css";
import HomePage from "./Pages/HomePage/HomePage.component";
import { Switch, Route } from "react-router-dom";
import ContactPage from "./Pages/ContactPage/ContactPage";
import SignPage from "./Pages/SignPage/Sign-in&out-Page";
import ShopPage from "./Pages/ShopPage/ShopPage";
import Navbar from "./Layout/Navbar/navbar";
import {auth} from './firebase/firebase.config'

class App extends Component {
  constructor() {
    super();
    this.state={
      currentUser: null,
    }
  }
  // subscription is Closed
  unSubscribeFromAuth= null;

  componentDidMount(){
    //subscription is OPened because we have user
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser: user});
      console.log(user)
    })
  }

  componentWillUnmount(){
    //subscription is Closed again because the component is unmount 
    this.unSubscribeFromAuth();
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
