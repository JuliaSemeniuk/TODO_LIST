const path = require("path");

module.exports = {
  entry: "./JS_DOM/todo_list/index.js",
  output: {
    path: path.resolve(__dirname, "app"),
    filename: "index.bundle.js",
  },
  mode: "development",
};
