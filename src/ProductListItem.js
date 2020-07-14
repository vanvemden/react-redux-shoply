import React from "react";
import { ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

function ProductListItem({ id, item }) {

  return (
    <ListGroupItem>
      <Link to={`/products/${id}`}>{item.name}</Link>
    </ListGroupItem>
  );
}

export default ProductListItem;
