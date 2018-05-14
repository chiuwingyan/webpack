/**
 * store是用于连接action和reducers，store的职责如下：
 * 1、维持应用的 state；
 * 2、提供 getState() 方法获取 state；
 * 3、提供 dispatch(action) 触发reducers方法更新 state；
 * 4、通过subscribe(listener) 注册监听器;
 * 5、通过 subscribe(listener) 返回的函数注销监听器。
 */

 import {createStore} from 'redux';
 import combineReducers from './reducers.js';

 let store = createStore(combineReducers);

 export default store;