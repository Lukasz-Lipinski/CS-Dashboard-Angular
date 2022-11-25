const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const mongoDB = require("mongodb").MongoClient;

const app = express();
const port = 3000;

app.use([cors(), express.json(), bodyParser.urlencoded({ extended: false })]);
app.use(express.static(path.join(__dirname, "./dist/computer-shop-dashboard")));

const deleteProduct = async (model) => {
  await (await connectToDB()).collection("products").findOneAndDelete({
    model: model,
  });
};

const connectToDB = async () => {
  const url = `mongodb+srv://admin:admin@cluster0.cpxb3.mongodb.net/`;
  const connection = (await mongoDB.connect(url)).db("computer-shop");

  return connection;
};

//GETS METHODS
app.get("/api", (req, res) => {
  res.json({ msg: "Hello World!" });
});

app.get("/api/products", async (req, res) => {
  const products = await (await connectToDB())
    .collection("products")
    .find()
    .toArray();

  res.status(200).json({
    products,
  });
});

//POSTS METHODS
app.post("/api/products", async (req, res) => {
  const products = await (await connectToDB())
    .collection("products")
    .find()
    .toArray();

  const { body } = req;

  const isExsist = products.find(
    (item) => item.model === body.model && item.brand === body.brand
  );

  if (isExsist) {
    return res.status(401).json({
      msg: "This product already exsists",
    });
  }

  (await connectToDB()).collection("products").insertOne({
    ...body,
  });

  return res.status(200).json({
    msg: "Successful",
  });
});

app.post("/api/products/update", async (req, res) => {
  const { oldProduct, newProduct } = req.body;

  await (await connectToDB())
    .collection("products")
    .findOneAndReplace({ model: oldProduct.model }, { ...newProduct });

  return res.status(200).json({
    msg: "Data were updated successfully",
  });
});

//DELETE METHODS
app.delete("/api/products/remove/:model", async (req, res) => {
  const { params } = req;

  const isExsist = await (await connectToDB()).collection("products").findOne({
    model: params.model,
  });

  if (!isExsist) {
    return res.status(301).json({
      msg: "Product not exsits!",
    });
  }

  await deleteProduct(params.model);
  return res.status(200).json({
    msg: "Removed",
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
