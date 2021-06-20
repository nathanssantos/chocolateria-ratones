import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../Header/Header";

import Home from "../../screens/Home/Home";
import Products from "../../screens/Products/Products";
import Contact from "../../screens/Contact/Contact";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/produtos">
        <Products />
      </Route>
      <Route path="/contato">
        <Contact />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
