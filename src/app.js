import app from '@talentui/bootstrap-react';
import reducer from './reducers';

app.config({
  el: '#bsMain', // 应用挂载点，可以是querySelector的选择器，或者是dom节点 //必须传
  reducer, // 应用的reducer, 必须传
  initialState: {}, //redux store的初始状态，可选
  afterCreateStore: function(store) {
     //store创建后的回调 可以在这里把saga注册到redux中了，可选
  },
  middlewares: [] //redux中间件，放到数组里，可选
});

app.start(); //启动应用

// reducer的热替换，生产环境会自动删除
if (module.hot) {
  module.hot.accept("./reducers", () => {
      let reducer = require("./reducers").default;
      app.replaceReducer(reducer);
  });
}