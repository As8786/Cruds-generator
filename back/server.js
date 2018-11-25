const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("./Mongoose/connect");
const { productsCrud } = require("./Mongoose/Routes/productsRoutes");
const { contactsCrud } = require("./Mongoose/Routes/contactsRoutes");

const app = express();
app.use(bodyParser.json());

app.get("/products", productsCrud.getProducts);
app.get("/products/:id", productsCrud.getOneProduct);
app.post("/products", productsCrud.addProduct);
app.put("/products/:id", productsCrud.updateProduct);
app.delete("/products/:id", productsCrud.deleteProduct);

app.get("/contacts", contactsCrud.getContacts);
app.get("/contacts/:id", contactsCrud.getOneContact);
app.post("/contacts", contactsCrud.addContact);
app.put("/contacts/:id", contactsCrud.updateContact);
app.delete("/contacts/:id", contactsCrud.deleteContact);

app.listen(3007, err => {
  if (err) console.log("server erreur");
  else console.log("server running on port 3007");
});
