import app from '@talentui/bootstrap-react';
import reducer from './reducers';
import Layout from './components/common/layout'

app.config({
  afterCreateStore: function(store) {
    console.log('store created');
  },
  initialState: {},
  el: '#bsMain',
  reducer,
  layout: Layout,
  pageLoader: path =>
    import(/* webpackMode: "lazy", webpackChunkName: "[request]" */ `_/src/pages/${path}/page-view`)
});

app.start();
