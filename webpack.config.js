const path = require("path");

module.exports = {
  entry: "./JS_PROJECT_12/todo/index.js",
  output: {
    path: path.resolve(__dirname, "app"),
    filename: "index.bundle.js",
  },
  mode: "development",
};
