import {combineReducers} from 'redux';
import {ADD_POST, DELETE_POST, EDIT_POST} from '../actions'

const initialState = {
    posts: []
}

function postReducer(state = initialState, action){
    const {id, post, deleted} = action

    switch(action.type){
        case ADD_POST:
        return [...state, {id: action.id, post: action.post, deleted:false}];



        case DELETE_POST:
            return {
                ...state,
            }
        case EDIT_POST:
            return{
                ...state,

            }
        default:
            return state
    }

}

export default addpostReducer;
