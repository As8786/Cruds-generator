import React, { Component } from "react";
import Hoc from "../Hoc";
import AddContact from "./AddContact";
import ContactsDisplay from "./ContactsDisplay";

class Contacts extends Component {
  componentDidMount() {
    this.props.cruds.getItems("/contacts");
  }

  addNewContact = newContact => {
    this.props.cruds.postItem("/contacts", newContact);
  };

  render() {
    return (
      <div>
        <ContactsDisplay contacts={this.props.items} />
        <AddContact addContact={newContact => this.addNewContact(newContact)} />
      </div>
    );
  }
}

export default Hoc(Contacts);
