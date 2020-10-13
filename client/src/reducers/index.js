import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import nowReducer from './nowReducer';

export default combineReducers({
    blog: blogReducer,
    now: nowReducer
});