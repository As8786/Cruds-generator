import React from "react";

const ContactDisplay = props => {
  return (
    <div style={{ display: "flex" }}>
      {props.contacts.map((e, i) => (
        <div key={i} style={{ border: "2px solid grey", margin: "7px" }}>
          <div style={{ display: "flex" }}>
            <h5> Name :</h5>
            <p>{e.name}</p>
          </div>

          <div style={{ display: "flex" }}>
            <h5> Email :</h5>
            <p>{e.email}</p>
          </div>

          <div style={{ display: "flex" }}>
            <h5> Telephone :</h5>
            <p>{e.telephone}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactDisplay;
