const express = require("express");
const path = require("path");
const justcall = require("@justcall/justcall-dialer-sdk");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/justcall-dialer-sdk.js", (req, res) => {
  res.set("Content-Type", "application/javascript");
  res.sendFile(
    path.join(
      __dirname,
      "node_modules",
      "@justcall",
      "justcall-dialer-sdk",
      "dist",
      "index.mjs"
    )
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
