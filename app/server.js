const express = require("express");
const app = express();
const PORT = 5000;

// set up the access to all the files in the public folder
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("../public/index");
});

const userRouter = require("./routes/SignIn");
app.use("/signIn", userRouter);

app.listen(PORT);