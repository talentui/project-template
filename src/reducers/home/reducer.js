import * as types from './types';

export default function(state = 0, action){
    switch(action.type){
        case types.INCREASE:
            return state + 2;
        default:
            return state;
    }
}