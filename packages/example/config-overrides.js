const paths = require("react-scripts/config/paths");

paths.srcPaths = paths.srcPaths.filter(p => !/create-react-app/.test(p));

const {
  rewireWebpack: rewireTypescript,
  rewireJest: rewireTypescriptJest
} = require("react-app-rewire-typescript-babel-preset");
// const {
//   rewireWebpack: rewireTypescript,
//   rewireJest: rewireTypescriptJest
// } = require("../dist");

module.exports = {
  webpack: function(config, env) {
    return rewireTypescript(config);
  },
  jest: function(config) {
    const rewiredConfig = rewireTypescriptJest(config);

    rewiredConfig.roots = rewiredConfig.roots.filter(
      p => !/create-react-app/.test(p)
    );

    return rewiredConfig;
  }
};
