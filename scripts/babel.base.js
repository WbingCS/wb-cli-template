const presets = [
  '@babel/preset-react',
];

const plugins = [
  ['@babel/plugin-proposal-decorators', {
    legacy: true
  }],
  ['@babel/plugin-proposal-class-properties', {
    loose: true
  }],
  '@babel/plugin-syntax-dynamic-import',
  'styled-jsx/babel'
];

module.exports = {
  presets,
  plugins,
};