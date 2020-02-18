import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/hompage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

import SingInAndSignUpPage from "./pages/sign-in-and-sign-up/sing-in-and-sign-up.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SingInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
