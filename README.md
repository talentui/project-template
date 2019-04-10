Talent Ui 2.0 模板项目

# 使用说明

## 项目入口

通过使用@talentui/bootstrap-react 来启动应用，这部分逻辑应该放在项目的[入口文件](./src/app.js)中

```js
import app from '@talentui/bootstrap-react';
import reducer from './reducers';

app.config({
  // 应用的reducer, 必须传
  reducer,
  // 应用挂载点，可以是querySelector的选择器，或者是dom节点， 可选，默认是#bsMain
  el: '#bsMain',
  //redux store的初始状态，可选
  initialState: {},
  //store创建后的回调 可以在这里把saga注册到redux中了，可选
  afterCreateStore: function(store) {},
  //redux中间件，放到数组里，可选,
  middlewares: [],
  //布局组件， 可选
  layout: Layout,
  //页面加载中显示的组件
  loadingComp: props => <div>加载中啊</div>,
  //应用报错时显示的组件
  errorComp: props => <div>出错了呀</div>
});

app.start(); //启动应用

// reducer的热替换，生产环境会自动删除
if (module.hot) {
  module.hot.accept('./reducers', () => {
    let reducer = require('./reducers').default;
    app.replaceReducer(reducer);
  });
}
```

## 布局组件

[布局组件](./src/components/common/layout.js)是指应用的布局模块，所有的页面共享这一布局，

### 如何关闭布局
**关闭单个页面的布局** 如果想在某一个页面上关闭布局，可以设置组件的 静态属性，**static useLayout=false**
**关闭所有页面布局** app.config的时候不传布局组件的配置就行了

```js
//布局组件示例
import React from 'react';
export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>所有的页面都会显示这段文字哦</h1>
        <div className="content-wrapper">{this.props.children}</div>
      </div>
    );
  }
}
```

## 加载组件

## 错误组件

## 页面

在项目的 pages 目录下创建子目录，并且在子目录下创建一个[page-view.js](./src/pages/home/page-view.js)，就会自动生成#/dirname 的路由上对应的一个页面，这个页面会成为[布局组件](./src/components/common/layout.js)的**children**，

**如果在 page-view.js 导出的组件上设置静态属性 useLayout=false,则不会显示布局**

## webpack 配置

项目的构建使用的@talentui/webpack-config，这是一个预置的的 webpack 配置，内置了一些常用的 loader 和 plugins，可以满足大部分情况下的项目构建任务。特殊场景可以通过一些参数来配置。
同时也会通过一些参数，开关一些 loader 和 plugins，提升构建的性能。
配置中的所有参数都有默认值，包括 entry, 所以这些配置只是为了灵活性，不用有压力

```js
//一些常用参数介绍
module.exports = require('@talentui/webpack-config')({
  //应用程序入口
  entry: './src/app.js',
  //应用使用的开发语言，ts | js
  language: 'ts',
  //webpack 配置中的publicPath
  publicPath: '',
  //是否抽离单独的css的文件
  extractStyle: true,
  //是否拆分共用代码到单独的文件，包括vender, common, webpack-boostrap
  useCommonChunk: true,
  // 是否启用babel的loose模式，
  loose: true,
  // 是否在处理样式文件时启用postCSS-loader，启用后会去项目根目录下找配置文件
  poseCSS: false,
  //是否启用css-loader的modules模式
  cssModule: false,
  //definePlugins的参数
  define: {},
  //处理js\ts文件的白名单，如果设置，构建时babel-loader会处理白名单里的代码，不传的话默认排除node_moduels和bower_components目录里的文件
  jsWhitelist: '',
  //webpack config alias
  alias: {},
  //webpack config mode
  mode: 'development',
  //babel处理的时候需要用添加的plugins或presets
  transformInclude: [],
  //babel-preset-env兼容性设置，可以按照项目情况修改具体参看：https://babeljs.io/docs/en/babel-preset-env#targets
  targets: {
    chrome: '45',
    edge: '14',
    ie: '10'
  },
  //应用启动的端口
  port: 3000,
  //指定本地开发承载页的路径
  hostPage: ''
});
```

## 启动应用

```sh
    npm i             #安装依赖
    npm run start     #运行项目
    npm run analysis  #运行代码分析
```
