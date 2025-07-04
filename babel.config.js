module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}],
['@babel/preset-react',{runtime :"automatic"}]], // will help us to write jsx syntax in the test file inside render()
};