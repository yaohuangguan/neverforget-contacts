const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect mongo db
connectDB();

//init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.json({
    msg: "Hello"
  });
});

//use routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server listen on" + PORT);
});
