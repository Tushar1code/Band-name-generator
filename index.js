require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

//routes
app.get("/", (req, res) => {
  const bandName = generateBandname();
  res.render("index", { bandName });
});

function generateBandname() {
  const adjective = ["cool", "awesome", "fantastic", "Nice", "amazing"];
  const nouns = ["band", "group", "team", "squad"];
  const randomAdjective =
    adjective[Math.floor(Math.random() * adjective.length)];
  const randomNouns = nouns[Math.floor(Math.random() * nouns.length)];
  return `${randomAdjective} ${randomNouns}`;
}

app.listen(port, () => {
  console.log(`server is running on${port}.`);
});
