const path = require('path');

exports.modifyWebpackConfig = ({ config }) => {
  const newConfig = config.merge({
    resolve: {
      root: path.resolve(config._config.context, 'src'),
    },
  });

  config.loader('graphql', {
    test: /\.graphql$/,
    exclude: /node_modules/,
    loader: 'graphql-tag/loader',
  });

  return newConfig;
};