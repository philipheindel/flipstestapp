const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;
const uuid = require("uuid");

server.use(cors());
server.use(bodyParser.json());

server.get("/", (req, res) => {
  let id = uuid.v4();
  console.log("sending uuid:" + id);
  res.status(200).json({
    id: id
  });
});

server.listen(port, () => {
  console.log("Example app listening on port " + port + "!");
});
