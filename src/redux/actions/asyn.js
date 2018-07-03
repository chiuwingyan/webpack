
import axios from 'axios';

export const BEFORESEND='asyn/beforeSend';
export const SUCCESS = 'asyn/success';
export const FAIL = 'asyn/fail';

export function beforeSend() {
    return{
        type: BEFORESEND
    }
}

export function success(result) {
    return{
        type: SUCCESS,
        result
    }
}

export function fail(result) {
    return {
        type: FAIL,
        result
    }
}

//thunk action函数
//用法和普通action一样，只是return不是一个对象，是函数
export function fetchPosts() {
    //使用了thunk中间件，知道该如何 处理此函数
    /**
     * 把dispatch方法通过参数形式传递给函数
     * 该函数内部就能自己dispatch action
     */
    return function (dispatch) {
        dispatch(beforeSend());     //这里dispatch一个方法，代表请求发起前
        
        /**
         * 这里使用Promise+settimeout模拟网络请求
         */
    //     new Promise((resolve,reject)=>{
    //         setTimeout(() => {
    //             reject('结果-异步请求失败')
    //             resolve('结果-异步请求成功');
    //         }, 300);
    //     }).then((data)=>{
    //         /**
    //          * 使用请求结果来更新应用对应的state，
    //          * 可以使用多个dispatch
    //          */
    //         dispatch(success(data));

    //     }).catch((data)=>{
    //         dispatch(fail(data));
    //     })
    

    axios.get('/api/user')
    .then((data) => {
        dispatch(success(data));
    })
    .catch((error)=>{
        dispatch(fail(error));
    })
}
}