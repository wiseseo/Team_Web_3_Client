// // next.config.js
// const withCss = require("@zeit/next-css");
// const withImages = require("next-images");

// require("dotenv").config();

// module.exports = {
//   withCss: withCss({
//     webpack: (config) => {
//       return config;
//     },
//   }),
//   withImages: withImages({
//     webpack(config, options) {
//       return config;
//     },
//   }),
//   env: {
//     GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
//     KAKAO_CLIENT_ID: process.env.KAKAO_CLIENT_ID,
//   },

// };

require('dotenv').config();
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path');
const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const withImages = require("next-images");
// Where your antd-custom.less file lives
const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './less/antd-custom.less'), 'utf8'));

const nextConfig = {
	env: {
		spaceID: process.env.spaceID,
		accessTokenDelivery: process.env.accessTokenDelivery,
	},
	distDir: '.next',
};

const plugins = [
	withCSS,
	withLess({
		lessLoaderOptions: {
			javascriptEnabled: true,
			modifyVars: themeVariables, 
		},
		webpack: (config, { isServer }) => {
			if (isServer) {
				const antStyles = /antd\/.*?\/style.*?/;
				const origExternals = [...config.externals];
				config.externals = [
					(context, request, callback) => {
						if (request.match(antStyles)) return callback();
						if (typeof origExternals[0] === 'function') {
							origExternals[0](context, request, callback);
						} else {
							callback();
						}
					},
					...(typeof origExternals[0] === 'function' ? [] : origExternals),
				];

				config.module.rules.unshift({
					test: antStyles,
					use: 'null-loader',
				});
			}
			return config;
		},
	}),
	withSass,
];
module.exports = withPlugins(plugins, nextConfig);
