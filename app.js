const express = require("express");
const bodyParser = require("body-parser");

// APP
const app = express();

// PORT
const port = 8000;

// Routes
const userRoutes = require("./routes/userRoutes");

// Middlware
app.use(bodyParser.json());
app.use("/api", userRoutes);

// Connection Requiring
require("./config/dbConnection").connect();
require("./config/dbConnection").sync();

// Model
require("./models");

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// App is listening
app.listen(port, (req, res) => {
  console.log(`App listening on port ${port}`);
});
