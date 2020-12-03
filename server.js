const express = require("express");
const mysql = require("mysql");
const app = express();
const PORT = process.argv.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("Example app listening on port port!");
});

//Run app, then load http://localhost:port in a browser to see the output.
