const {override, fixBabelImports} = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
);

/*以上是按需导入 从 ant-design mobile 中获取的*/
