const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use([cors(), express.json(), bodyParser.urlencoded({ extended: false })]);

const products = [];

const deleteProduct = (model) => {
  const productIndex = products.indexOf((item) => item.model === model);

  products.splice(productIndex, 1);
  return products;
};

//GETS METHODS
app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

app.get("/products", (req, res) => {
  res.status(200).json({
    products,
  });
});

//POSTS METHODS
app.post("/products", (req, res) => {
  const { body } = req;

  const isExsist = products.find(
    (item) => item.model === body.model && item.brand === body.brand
  );

  if (isExsist) {
    return res.status(401).json({
      msg: "This product already exsists",
    });
  }

  products.push(body);

  return res.status(200).json({
    msg: "Successful",
  });
});

//DELETE METHODS
app.delete("/products/remove/:model", (req, res) => {
  const { params } = req;
  const lengthBeforeRemoving = products.length;

  const lengthAfterRemoving = deleteProduct(params.model).length;

  if (lengthAfterRemoving < lengthBeforeRemoving) {
    return res.status(200).json({
      msg: "Removed",
    });
  }

  return res.status(401).json({
    msg: "Not exsist",
  });
});

app.listen(port, () => {
  console.log("This server works on ", port);
});
