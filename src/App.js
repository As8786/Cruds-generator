import React, { Component } from "react";

import Products from "./Products/Products";
import Contacts from "./Contacts/Contacts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contacts />
        <Products />
      </div>
    );
  }
}

export default App;
