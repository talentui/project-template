const path = require('path');
module.exports = require('@talentui/webpack-config')({
    entry: './src/app.js', //必须，应用程序入口，可以使用talent-ui-bootstrap
    dllList: ['@talentui/dll-react'], //可选，dll列表，
    useLint: false, //可选， 是否启用lint检查
    moduleScope: './src',
    language: 'mixed', //可选，default 'js' 可选 'ts', 'mixed',
    port: 3001,
    // host: "127.0.0.1",
    // targetBrowsers: 'ie >= 9', //可选，默认chrome 58 浏览器支持设置，最低ie9
    alias: {  //webpack alias配置
        // "react": "preact-compat",
        // "react-dom": "preact-compat"
        "&vender": path.resolve(process.cwd(), './src/venders')
    }
})