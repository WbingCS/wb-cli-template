const presets = ['@babel/preset-typescript', '@babel/preset-react']

const plugins = [
  [
    '@babel/plugin-proposal-decorators',
    {
      legacy: true
    }
  ],
  [
    '@babel/plugin-proposal-class-properties',
    {
      loose: true
    }
  ],
  '@babel/plugin-syntax-dynamic-import',
  ['styled-jsx/babel', { optimizeForSpeed: true }]
]

module.exports = {
  presets,
  plugins
}
