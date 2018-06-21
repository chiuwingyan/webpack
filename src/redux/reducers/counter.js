//这是对应action里面的counter的reducers
import { INCREMENT, DECREMENT, RESET } from '../actions/counter';

/*
*初始化state
*/
const iniState={
    count:0
};
/*
*reducer
*/
export default function reducer(state,action) {
    switch (action.type) {
        case INCREMENT:
        console.log('count',state.count)
            return {
                count:state.count+1
            };
        case DECREMENT:
            return{
                count: state.count - 1 
            };
        case RESET:
            return{
                count:0
            };
        default:
            return state
    }
}