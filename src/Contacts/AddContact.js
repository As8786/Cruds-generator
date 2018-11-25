import React, { Component } from "react";

class AddContact extends Component {
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    let labels = ["name", "email", "telephone"];
    return (
      <div className="addContact-container">
        <h4>Add Contacts</h4>
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
          onClick={() => this.props.addContact({ ...this.state })}
          value="Add Contact"
        />
      </div>
    );
  }
}

export default AddContact;
