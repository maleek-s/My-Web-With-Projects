import express from "express";
import mysql from "mysql";
import axios from "axios";

const app = express();

app.use(express.json());

app.listen(3001, () => {
  console.log("Listening on port 3001!!");
});

app.get("/", (req, res) => {
  res.json("Hi");
});

// MySQL Stuff - this is how I populated the database:

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "my-app",
});

const fetchOneWordData = async () => {
  try {
    const res = await axios.get("https://tuna.thesaurus.com/pageData/cruel");
    const data = res.data.data.definitionData;

    const q =
      "INSERT INTO `my-app`.`synonym-table` (`mainWord`, `synonymWord`, `synonymWord2`, `synonymWord3`, `synonymWord4`) VALUES (?)";

    const values = [
      data.entry,
      data.definitions[0].synonyms[0].term,
      data.definitions[0].synonyms[1].term,
      data.definitions[0].synonyms[2].term,
      data.definitions[0].synonyms[3].term,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return console.log("success");
    });
  } catch (err) {
    console.log(err);
  }
};

// fetchOneWordData();
