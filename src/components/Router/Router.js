import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../Header/Header";

import Home from "../../screens/Home/Home";
import Products from "../../screens/Products/Products";
import Contact from "../../screens/Contact/Contact";

const Router = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Header />
    <Switch>
      <Route path="/chocolateria-ratones/produtos">
        <Products />
      </Route>
      <Route path="/chocolateria-ratones/contato">
        <Contact />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
