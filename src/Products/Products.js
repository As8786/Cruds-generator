import React, { Component } from "react";
import Hoc from "../Hoc";
import AddProduct from "./AddProduct";
import ProductsDisplay from "./ProductsDisplay";

class Products extends Component {
  state = {
    items: []
  };
  componentDidMount() {
    this.props.cruds.getItems("/products");
  }

  addNewProduct = newProduct => {
    this.props.cruds.postItem("/products", newProduct);
  };

  render() {
    return (
      <div>
        <ProductsDisplay products={this.props.items} />
        <AddProduct addProduct={newProduct => this.addNewProduct(newProduct)} />
      </div>
    );
  }
}

export default Hoc(Products);
