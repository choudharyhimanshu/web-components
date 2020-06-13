module.exports = ({ config, mode }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /(node_modules|dist)/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: true, typescript: true }]],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push({
      test: /\.(scss)$/,
      exclude: /(node_modules|dist)/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    });
    config.resolve.extensions.push('.scss');

    return config;
};
