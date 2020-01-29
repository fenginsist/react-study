# 项目流程
开发一个移动APP ，使用 ant-design mobile 开发。
先安装 antd-mobile 组件：cnpm i-S antd-mobile


# 按需导入配置
根据文档的步子走：
1. 安装三个插件：react-app-rewired customize-cra babel-plugin-import
2. 项目根目录创建一个 config-overrides.js 用于修改默认配置。
3. 内容：
```
const {override, fixBabelImports} = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
);
```
4. 修改package.json
```
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom",
    "eject": "react-app-rewired eject"
  },
```
