module.exports = function(webpackConfig) {
  webpackConfig.babel.plugins.push('antd');

  // Fix ie8 compatibility
  webpackConfig.module.loaders.unshift({
    test: /\.jsx?$/,
    loader: 'es3ify-loader',
  });

  webpackConfig.module.loaders.forEach(function(item) {
    if (item.loader.indexOf('css?sourceMap')) {
      item.loader = item.loader.replace('css?sourceMap',
        'css?modules&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]');
    }
  });

  return webpackConfig;
};
