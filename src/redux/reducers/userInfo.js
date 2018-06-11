import { ADD,DES } from '../actions/userInfo'

const initState={
    number:100
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case ADD:
            return {
                number: state.number + 1
            };
        case DES:
            return {
                number: state.number - 1
            };
        default:
            return state
    }
}