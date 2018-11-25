const { product } = require("../Models/productsSchema");

const getProducts = (req, res) => {
  product.find((err, data) => {
    if (err) res.send("cant fetch product list");
    else res.send(data);
  });
};

const getOneProduct = (req, res) => {
  let productId = req.params.id;
  product.findOne({ _id: productId }, (err, data) => {
    if (err) res.send("cant get product");
    else res.send(data);
  });
};

const updateProduct = (req, res) => {
  let productId = req.params.id;
  let updatedProduct = req.body;
  product.findOneAndUpdate(
    { _id: productId },
    { ...updatedProduct },
    (err, data) => {
      if (err) res.send("cant update product");
      else res.send(data);
    }
  );
};

const deleteProduct = (req, res) => {
  let productId = req.params.id;
  product.findOneAndDelete({ _id: productId }, (err, data) => {
    if (err) res.send("cant delete product");
    else res.send(data);
  });
};

const addProduct = (req, res) => {
  let newProduct = new product(req.body);
  newProduct.save((err, data) => {
    if (err) res.send("cant save new product");
    else res.send(data);
  });
};

let productsCrud = {
  getProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  addProduct
};

module.exports = { productsCrud };
