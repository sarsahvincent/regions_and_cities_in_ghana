const express = require("express");
const cors = require("cors");
const regions = require("./regions");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(regions);
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server is runnung on port ${port}`));
