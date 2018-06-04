//这是总的reducer。如果一个项目有很多reducer，我们要把他们整合到一起
import counter from './reducers/counter';

export default function combineReducers(state = {}, action){
    return {
        counter:counter(state.counter,action)
    }
}