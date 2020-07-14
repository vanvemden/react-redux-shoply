import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardText, CardTitle, CardImg, Button } from "reactstrap";
import { addToCart, removeFromCart } from "./actions";

function Product() {
  const { id } = useParams();
  const item = useSelector(state => state.shop[id]);
  const inCart = useSelector(state => state.cart.some(cart_id => cart_id === id));

  const dispatch = useDispatch();

  const addItem = id => {
    dispatch(addToCart(id));
  }

  const removeItem = id => {
    dispatch(removeFromCart(id));
  }

  return (
    <section className="container">
      <h1 className="font-weight-bold">{item.name}</h1>
      <Card>
        <CardBody>
          <CardImg src={item.image_url} alt={item.name} style={{ width: 18 + 'rem' }} />
          <CardText className="font-italic">
            {item.description}
          </CardText>
          <p>
            <b>Price:</b> {item.price}
          </p>
          <Button color="primary" onClick={() => addItem(id)} >Add to Cart</Button>{' '}
          {inCart ?
            <Button color="danger" onClick={() => removeItem(id)} >Remove from Cart</Button>
            :
            null
          }
        </CardBody>
      </Card>
    </section>
  );
}

export default Product;
