import reduxThunk from "redux-thunk";
import logger from "redux-logger";
//应用配置文件，这个文件是必须存在的，但是配置可以为空，可以对项目运行时进行一些配置，比如，配置应用的初始state, redux中间件
/**
 * 导出对象 应用配置，作为业务的扩展点
 *  @middlewares：包含middlewares，
 *  @afterCreateStore：创建完成store之后的回调，比如使用Redux-saga就需要在创建完store之后运行Saga
 *  @initialState: 应用程序的初始状态，一般没什么用，万一有用呢。
 *  @el: 如果是字符串，就是指定dom的ID, 也可以传dom对象, 默认是bsMain
 *  @...：   如果有什么需求可以提给liguoming@beisen.com，
 */
const config = {
    middlewares: [reduxThunk, logger],
    afterCreateStore: function(store) {
        console.log("store created");
    },
    initialState: {},
    el: "bsMain"
};
export default config;
