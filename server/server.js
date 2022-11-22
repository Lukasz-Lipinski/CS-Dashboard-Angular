const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use([cors(), express.json(), bodyParser.urlencoded({ extended: false })]);

const products = [];

//GETS METHODS
app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

app.get("/products", (req, res) => {
  res.status(200).json(products);
});

//POSTS METHODS
app.post("/products", (req, res) => {
  // const products = this.productsService.downloadProducts();

  // const isExsist = products.find(
  //   (item) => item.model === body.model && item.brand === body.brand
  // );

  // if (isExsist) {
  //   return res.status(401).json({
  //     msg: "This product already exsists",
  //   });
  // }

  // this.productsService.addNewProduct(body);

  return res.status(200).json({
    body,
  });
});

//DELETE METHODS
app.delete("/remove/:model", () => {
  const lengthBeforeRemoving = this.productsService.downloadProducts().length;

  const lengthAfterRemoving = this.productsService.remove(model).length;

  if (lengthAfterRemoving < lengthBeforeRemoving) {
    return res.status(200).send({
      msg: "Removed",
    });
  }

  return res.status(401).send({
    msg: "Not exsist",
  });
});

app.listen(port, () => {
  console.log("This server works on ", port);
});
