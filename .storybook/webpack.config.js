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
    return config;
};
