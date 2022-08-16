const CracoAlias = require('craco-alias');

module.exports = {
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx'],
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
};
