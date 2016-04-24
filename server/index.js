var express = require("express");
var cors = require("cors");
var searchArtists = require("./routes/searchArtists");

var app = express();
app.use(cors());

app.get('/', function (req, res) {
  res.send("Client Server App using React!");
});

app.use("/test", searchArtists);

app.listen(3000, function () {
  console.log("Server listening on port 3000!");
});
