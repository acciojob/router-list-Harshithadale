import React from "react";
import { Link } from "react-router-dom";

function ItemList() {
  return (
    <div>
      <h1>ItemList</h1>
      <ul style={{listStyleType:"nonet "}}>
        <li><Link to="/item/:1">item 1</Link></li>
        <br />
        <li><Link to="/item/:2">item 1</Link></li>
        <br />
        <li><Link to="/item/:3">item 1</Link></li>
      </ul>
    </div>
  );
}

export default ItemList;
