const {plugins} = require('@callstack/repack');

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-async-generator-functions',
  ],
  // plugins: ['@babel/plugin-proposal-class-properties'],
};
