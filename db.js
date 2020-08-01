// //implement DataBase LowDB
// const low = require("lowdb");
// const FileSync = require("lowdb/adapters/FileSync");
// const adapter = new FileSync("db.json");
// const db = low(adapter);
// db.defaults({ users: [], sessions: [] }).write();

var mysql = require("mysql");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "emarket",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("MySQL Connected!");
});

module.exports = db;
