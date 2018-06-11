//这是总的reducer。如果一个项目有很多reducer，我们要把他们整合到一起
import counter from './reducers/counter';
import userInfo from './reducers/userInfo';
import {combineReducers} from "redux";

export default combineReducers({
    counter,
    userInfo
});