const db = require("../db");
const shortid = require("shortid");

module.exports.index = (req, res) => {
  // const page = parseInt(req.query.page) || 1;
  // const perPage = 9;

  // // const start = (page -1) * perPage;
  // // const end = page * perPage;
  // const drop = (page - 1) * perPage;
  // const numPage =
  //   Math.floor(db.get("products").size().value() / perPage) +
  //   (db.get("products").size().value() % perPage === 0 ? 0 : 1);

  // res.render("product/index", {
  //   // products: db.get('products').value().slice(start, end)
  //   products: db.get("products").drop(drop).take(perPage).value(),
  //   numPage: numPage,
  //   page: page,
  // });
  let sql = "SELECT * FROM products";

  db.query(sql, function (err, result) {
    if (err) throw err;
    res.render("product/index", {
      products: result,
    });
  });
};

module.exports.create = (req, res) => {
  let sql = "select * from product_type";

  db.query(sql, function (err, result) {
    res.render("product/create", {
      product_type: result,
    });
  });
};

module.exports.postCreate = (req, res) => {
  let id = shortid.generate();
  let typeId = req.body.product_type;
  let name = req.body.name;
  let description = req.body.description;
  let price = req.body.price;

  let image = req.file.path.split("\\").slice(1).join("\\");
  let sql = "INSERT INTO products VALUES ?";
  let values = [[id, typeId, name, description, price, image]];
  db.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("1 record product inserted");
    res.redirect("/products");
  });
};
