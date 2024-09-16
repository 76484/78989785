const express = require("express");
const { engine } = require("express-handlebars");
const TransactionManager = require("./transactionManager");

const app = express();
const port = 3000;

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  const transactionManager = new TransactionManager();

  res.render("home", {
    name: "John Doe",
    helpers: {
      uppercase(word) {
        return `[${transactionManager.runSomeFunction()}] ${word.toUpperCase()}`;
      },
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
