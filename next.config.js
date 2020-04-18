// next.config.js
const withCss = require("@zeit/next-css");
const withImages = require("next-images");
require("dotenv").config();
module.exports = {
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    KAKAO_CLIENT_ID: process.env.KAKAO_CLIENT_ID,
  },
  withCss: withCss({
    webpack: (config) => {
      return config;
    },
  }),
  withImages: withImages({
    webpack(config, options) {
      return config;
    },
  }),
};
