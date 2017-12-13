const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");

const port = 3002;
const { connectionString } = require("./config").massive;
const app = express();

app.use(json());
app.use(cors());



massive(connectionString)
.then(db => app.set("db", db))
.catch(console.log);


app.get("/api/books", function(req, res) {
    req.app
    .get("db")
    .getBooks()
    .then(response => {
      res.json(response);
    })
    .catch(console.log);
})

app.get("/api/books/:id", function(req, res) {
    req.app
    .get("db")
    .getBookById([req.params.id])
    .then(response => {
      res.json(response);
    })
    .catch(console.log);
})


app.post("/api/auth/login", function(req, res) {
    console.log("post to login")
});

app.post("/api/auth/register", function(req, res) {
    console.log("post to register")
});

app.post("/api/auth/logout", function(req, res) {
    console.log("post to logout")
  });
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});