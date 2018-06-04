import {increment,decrement,reset} from './actions/counter';
import store from './store';

//打印初始状态
console.log(store.getState());

/**
 * 每次state更新时，打印日志
 *  subscribe() 返回一个函数用来注销监听器，执行unsubscribe(),就是注销监听器
 */
let unsubscribe=store.subscribe(()=>
        console.log(store.getState())
)

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());