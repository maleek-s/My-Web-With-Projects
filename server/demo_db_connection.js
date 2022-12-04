import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jedandvatri123@",
  database: "my-app",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
