import React, { Component } from "react";

class AddProduct extends Component {
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    let labels = ["name", "description", "price"];
    return (
      <div className="addProduct-container">
        <h4>Add Products</h4>
        <div
          className="inputs"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {labels.map(e => (
            <input
              placeholder={e}
              name={e}
              onChange={this.onChange}
              style={{ width: "250px" }}
            />
          ))}
        </div>
        <input
          type="button"
          onClick={() => this.props.addProduct({ ...this.state })}
          value="Add Product"
        />
      </div>
    );
  }
}

export default AddProduct;
