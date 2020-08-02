var db = require("../db");
const shortid = require("shortid");

class User {
  constructor(_id, _email, _password, _name, _phone, _avatar) {
    this.id = _id;
    this.email = _email;
    this.password = _password;
    this.name = _name;
    this.phone = _phone;
    this.avatar = _avatar;
  }

  save() {
    let sql = "INSERT INTO users VALUES ?";
    let values = [
      [this.id, this.email, this.password, this.name, this.phone, this.avatar],
    ];
    db.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  }

  static getUser(next) {
    let sql = "SELECT * FROM users";
    db.query(sql, (err, result) => {
      if (err) throw err;
      next(null, result);
    });
  }

  static getUserWithId(id, next) {
    let sql = "SELECT * FROM users WHERE user_id = ?";
    db.query(sql, [id], function (err, result) {
      if (err) throw err;
      next(null, result);
    });
  }
  static searchUserName(name, next) {
    let sql = "SELECT * FROM users WHERE name like '%" + name + "%'";
    db.query(sql, (err, result) => {
      if (err) throw err;
      next(null, result);
    });
  }
}

module.exports = User;
