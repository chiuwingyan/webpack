/**
 * store是用于连接action和reducers，store的职责如下：
 * 1、维持应用的 state；
 * 2、提供 getState() 方法获取 state；
 * 3、提供 dispatch(action) 触发reducers方法更新 state；
 * 4、通过subscribe(listener) 注册监听器;
 * 5、通过 subscribe(listener) 返回的函数注销监听器。
 */
import thunkMiddleware from 'redux-thunk'; //引入中间件，让action不仅返回一个对象，还可以返回函数，可以dispatch函数，用作请求异步。
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware} from 'redux';
import combineReducers from './reducers.js';
const loggerMiddleware = createLogger()

 let store = createStore(
     combineReducers,
     {
         counter:{ //createStore的第二个参数为初始化state，这里的初始化state的优先级会比reducer里面高,这里集成了不同的reducere，初始化不同的reducer时，key就是你要初始化的reducer
             count:42 
         }
     },
     applyMiddleware(
         thunkMiddleware, // 允许我们 dispatch() 函数
         loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
     )
    );

if (module.hot) {
    module.hot.accept("./reducers", () => {
            const nextCombineReducers = require("./reducers").default;
            store.replaceReducer(nextCombineReducers);
        });
}


 export default store;