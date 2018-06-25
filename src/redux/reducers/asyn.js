import { BEFORESEND, SUCCESS, FAIL} from '../actions/asyn'
//实现异步网络请求的reducer
import {combineReducers} from 'redux'
const initState={
    status:'',
    result:''
}

function beforeSend(state=initState,action){
    switch (action.type) {
        case BEFORESEND:
        console.log('请求发起');
            return Object.assign({},state,{
                status:'状态-请求发起zhi前'
            })
            break;
    
        default:
            return state
            break;
    }
}

function fetchResult(state=initState,action){
    switch (action.type) {
        case SUCCESS:
        console.log('请求成功');
            return Object.assign({},state,{
                status:'状态-请求成功',
                result:action.result
            })
            break;
        case FAIL:
        console.log('请求失败');
            return Object.assign({},state,{
                status:'状态-请求失败',
                result:action.result
            })
            break
        default:
            return state;
            break;
    }
}

const asyn=combineReducers({
    beforeSend,
    fetchResult
})

export default asyn;