const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const connectDb = require("./config/dbConnection");
const dotenv = require('dotenv').config();

const port = process.env.PORT;

connectDb();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api/members", require("./routes/memberRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/currentUser", require("./routes/currentUserRoutes"));

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
