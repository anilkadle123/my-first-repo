//import { getAllItems } from "./services/fakeItemService";
const getAllItems = require("./services/fakeItemService");
const express = require("express");
var cors = require("cors");

//const Joi = require("joi"); //used for validation
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

//READ Request Handlers
app.get("/", (req, res) => {
  res.send("Welcome to Supermarket REST API Library");
});

app.get("/getAllItems", (req, res) => {
  const items = getAllItems();

  res.send(items);
});
app.post("/auth", (req, res) => {
  const { username, password } = req.body;

  //console.log(username, password);
  //console.log("Headers", req.headers);
  if (username.toLowerCase() === "guru" && password.toLowerCase() === "guru")
    res.send("Pass");
  else res.status(404).send("Fail");

  //console.log(res);
});

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
