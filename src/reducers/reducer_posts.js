import _ from 'lodash';
import {FETCH_POSTS,FETCH_POST,DELETE_POST} from '../actions/index';
export default function (state = [],action){
switch(action.type){
    case FETCH_POSTS:
    return action.payload;
    case FETCH_POST:
    const post = action.payload.data;
    const newState = {...state};
    newState[post.ISBN] = post;
    return newState;
    case DELETE_POST:
    return _.omit(state,action.payload);

default:
return state;
    }
 };