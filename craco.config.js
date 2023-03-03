const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: "/.css$/i",
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
