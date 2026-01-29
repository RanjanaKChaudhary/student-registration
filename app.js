const express = require("express");
const path = require("path");

const registerRoutes = require("./routes/registerRoutes");
const connectDB = require("./config/db");

const app = express();

/* body parser */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* view engine setup */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* routes */
app.use("/", registerRoutes);

/* database */
connectDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});