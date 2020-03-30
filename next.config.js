// next.config.js
const withCss = require("@zeit/next-css");
require("dotenv").config();
module.exports = {
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID
  },
  withCss: withCss({
    webpack: config => {
      return config;
    }
  })
};
