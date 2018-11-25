import React, { Component } from "react";
import axios from "axios";

const Hoc = WrappedComponent => {
  return class CrudGenerator extends Component {
    state = {
      items: []
    };
    getItems = route => {
      axios
        .get(route)
        .then(res => {
          return this.setState({
            items: res.data
          });
        })
        .catch(err => alert("cant fetch items"));
    };

    postItem = (route, newItem) => {
      axios
        .post(route, newItem)
        .then(res => this.getItems(route))
        .catch(err => alert("cant add item"));
    };

    render() {
      let cruds = { getItems: this.getItems, postItem: this.postItem };
      return <WrappedComponent cruds={cruds} items={this.state.items} />;
    }
  };
};

export default Hoc;
