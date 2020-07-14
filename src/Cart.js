import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function Product() {
  const cart = useSelector(state => state.cart);
  const products = useSelector(state => state.shop);

  // Group cart items by id and keep count
  const cartItems = cart.reduce((items, id) => {
    items[id] ? items[id]++ : items[id] = 1;
    return items;
  }, {});

  return (
    <section className="container">
      <h1>Cart</h1>

      {cart.length > 0 ?
        Object.entries(cartItems).map(([id, count]) =>
          <CartItem key={id} id={id} count={count} item={products[id]} />
        )
        :
        <h2>You have no items in your cart. Let's go shopping!</h2>
      }
    </section>
  );
}

export default Product;
