const path = require("path");

module.exports = {
  entry: "./src/index.js", // The entry point of your application
  output: {
    filename: "bundle.js", // The name of the output file
    path: path.resolve(__dirname, "dist"), // The directory where the output file will be placed
  },
  mode: "development", // Set mode to 'development' or 'production'
};
