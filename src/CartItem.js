import React from "react";
import { addToCart, removeFromCart } from "./actions";
import { useDispatch } from "react-redux";
import { Media, Button } from "reactstrap";


function CartItem({ id, count, item }) {
  const dispatch = useDispatch();

  const addItem = id => {
    dispatch(addToCart(id));
  }

  const removeItem = id => {
    dispatch(removeFromCart(id));
  }

  return (
    <Media className="CartItem my-3">
      <Media className="mx-3">
        <Media object src={item.image_url} style={{ width: 150 }} alt={item.name} />
      </Media>
      <Media body>
        <Media heading>
          {item.name} / price: {item.price} / quantity : {count}
        </Media>
        <p>{item.description}</p>
        <Button color="primary" onClick={() => addItem(id)} >+</Button>{' '}
        <Button color="danger" onClick={() => removeItem(id)} >-</Button>
      </Media>
    </Media>);
}

export default CartItem;
