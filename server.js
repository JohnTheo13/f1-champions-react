const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
const port = 4000;
// Proxy
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   next();
// });

app.get("/", async function (req, res) {
  res.send("Hello Luffy");
});

app.get("/:country", async function (req, res) {
  console.log("wild ==>", req.params);
  // const d = await new Promise((resolve) => setTimeout(() => resolve({skata: 1, dyo: 2}), 800))
  const data = await fetch("https://restcountries.com/v2/name/peru");
  const d = await data.json();
  console.log(d);
  res.json(d);
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
