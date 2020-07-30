//implement DataBase LowDB
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
db.defaults({ users: [], sessions: [] }).write();

var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "qlbh",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports = db;
