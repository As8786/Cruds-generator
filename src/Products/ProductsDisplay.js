import React, { Component } from "react";

const ProductsDisplay = props => {
  return (
    <div style={{ display: "flex" }}>
      {props.products.map((e, i) => (
        <div key={i} style={{ border: "2px solid grey", margin: "7px" }}>
          <div style={{ display: "flex" }}>
            <h5> Name :</h5>
            <p>{e.name}</p>
          </div>

          <div style={{ display: "flex" }}>
            <h5> Description :</h5>
            <p>{e.description}</p>
          </div>

          <div style={{ display: "flex" }}>
            <h5> Price :</h5>
            <p>{e.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsDisplay;
