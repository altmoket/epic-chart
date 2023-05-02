const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./src/example.js", "./src/epic_chart.js", "./src/bar_chart.js", "./src/horizontal_bar_chart.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
