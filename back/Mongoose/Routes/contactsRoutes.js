const { contact } = require("../Models/contactsSchema");

const getContacts = (req, res) => {
  contact.find((err, data) => {
    if (err) res.send("cant fetch contact list");
    else res.send(data);
  });
};

const getOneContact = (req, res) => {
  let contactId = req.params.id;
  contact.findOne({ _id: contactId }, (err, data) => {
    if (err) res.send("cant get contact");
    else res.send(data);
  });
};

const updateContact = (req, res) => {
  let contactId = req.params.id;
  let updatedContact = req.body;
  contact.findOneAndUpdate(
    { _id: contactId },
    { ...updatedContact },
    (err, data) => {
      if (err) res.send("cant update contact");
      else res.send(data);
    }
  );
};

const deleteContact = (req, res) => {
  let contactId = req.params.id;
  contact.findOneAndDelete({ _id: contactId }, (err, data) => {
    if (err) res.send("cant delete contact");
    else res.send(data);
  });
};

const addContact = (req, res) => {
  let newcontact = new contact(req.body);
  newcontact.save((err, data) => {
    if (err) res.send("cant save new contact");
    else res.send(data);
  });
};

let contactsCrud = {
  getContacts,
  getOneContact,
  updateContact,
  deleteContact,
  addContact
};

module.exports = { contactsCrud };
