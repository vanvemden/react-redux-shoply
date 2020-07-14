import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import { useSelector } from "react-redux";

import "./NavBar.css"

function NavBar() {

  const cart = useSelector(state => state.cart);

  return (
    <Navbar className="NavBar mb-5" expand="md">
      <NavLink exact to="/" className="navbar-brand">
        Shoply
      </NavLink>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to="/products">Products</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/cart">Cart ({cart.length}) </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
