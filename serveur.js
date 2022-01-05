const express = require("express");
const route = require("./routes");

function createServer() {
  const app = express();
  app.use(express.json());
  app.use("/api", route);
  return app;
}

module.exports = createServer;
