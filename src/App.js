import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./NavBar"
import ProductList from "./ProductList";
import Product from "./Product";
import Cart from "./Cart";

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/products/:id">
            <Product />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route exact path="/">
            <ProductList />
          </Route>
        </Switch>
      </main>

    </div>
  );
}

export default App;
