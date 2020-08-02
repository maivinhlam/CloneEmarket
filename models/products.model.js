var db = require("../db");

class Product {
  constructor(_id, _typeId, _name, _description, _price, _image) {
    this.id = _id;
    this.typeId = _typeId;
    this.name = _name;
    this.description = _description;
    this.price = _price;
    this.image = _image;
  }

  save() {
    let sql = "INSERT INTO products VALUES ?";
    let values = [
      [
        this.id,
        this.typeId,
        this.name,
        this.description,
        this.price,
        this.image,
      ],
    ];
    db.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("1 record product inserted");
    });
  }

  static getProduct(next) {
    let sql = "SELECT * FROM products";

    db.query(sql, function (err, result) {
      if (err) throw err;
      next(null, result);
    });
  }
}

module.exports = Product;
