const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use([cors(), express.json(), bodyParser.urlencoded({ extended: false })]);
app.use(express.static(path.join(__dirname, "./dist/computer-shop-dashboard")));

const products = [];

const deleteProduct = (model) => {
  const productIndex = products.findIndex((el) => el.model === model);
  products.splice(productIndex, 1);
  return products;
};

//GETS METHODS
app.get("/api", (req, res) => {
  res.json({ msg: "Hello World!" });
});

app.get("/api/products", (req, res) => {
  res.status(200).json({
    products,
  });
});

//POSTS METHODS
app.post("/api/products", (req, res) => {
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

app.post("/api/products/update", (req, res) => {
  const { index, product } = req.body;
  products.splice(index, 1, product);
  res.status(200).json({ msg: "Data were updated" });
});

//DELETE METHODS
app.delete("/api/products/remove/:model", (req, res) => {
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

app.get("*", (_, res) => {
  res.sendFile(
    path.join(_dirname, "./dist/computer-shop-dashboard/index.html"),
    (err) => {
      console.log(err);
    }
  );
});

app.listen(port, () => {
  console.log("This server works on ", port);
});

module.exports = app;
