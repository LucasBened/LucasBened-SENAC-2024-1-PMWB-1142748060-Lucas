const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "p@$$w0rd",
  database: "dadosgestao",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
});

app.get("/zonas_ajudadas", function (req, res) {
  db.query("SELECT * FROM zonas_ajudadas", function (error, results) {
    if (error) {
      console.error("Error fetching data from zonas_ajudadas: ", error);
      res.status(500).send("Error fetching data from zonas_ajudadas");
      return;
    }
    res.send(results);
  });
});

app.get("/dados_pragas", function (req, res) {
  db.query("SELECT * FROM dados_pragas", function (error, results) {
    if (error) {
      console.error("Error fetching data from dados_pragas: ", error);
      res.status(500).send("Error fetching data from dados_pragas");
      return;
    }
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});