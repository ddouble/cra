const {addLessLoader, fixBabelImports, override} = require("customize-cra");

module.exports = override(
  // do stuff with the webpack config...
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true
    // modifyVars: {'@primary-color': '#1DA57A'},
  })
);
