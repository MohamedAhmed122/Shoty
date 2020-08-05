import React from "react";

import "./App.css";
import HomePage from "./Pages/HomePage/HomePage.component";
import {Switch, Route} from 'react-router-dom'
import ContactPage from "./Pages/ContactPage/ContactPage";
import SignPage from './Pages/SignPage/Sign-in&out-Page'
import ShopPage from './Pages/ShopPage/ShopPage'
import Navbar from './Layout/Navbar/navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/sign' component={SignPage}/>
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
