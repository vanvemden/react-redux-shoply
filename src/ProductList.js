import React from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "reactstrap";
import ListItem from "./ProductListItem";

function ProductList() {

  const products = useSelector(state => state.shop);

  return (
    <section className="container font-weight-bold">
      <h1 className="font-weight-bold">Product List</h1>
      <ListGroup className="ProductList">
        {Object.entries(products).map(([key, item]) =>
          <ListItem key={key} id={key} item={item} />
        )}
      </ListGroup>
    </section>
  )

}

export default ProductList;
