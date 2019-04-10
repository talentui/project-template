import React from 'react';
import app from '@talentui/bootstrap-react';
import reducer from './reducers';
import Layout from './components/common/layout';

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
