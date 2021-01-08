import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import nowReducer from './nowReducer';
import projectsReducer from './projectsReducer';

export default combineReducers({
    blog: blogReducer,
    now: nowReducer,
    projects: projectsReducer
});