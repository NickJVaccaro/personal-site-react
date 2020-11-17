const initialState = {
    posts: [],
    currentPost: {}
}

export default function blogReducer (state = initialState, action) {
    switch(action.type) {
        case 'GET_POSTS':
            return {
                ...state,
                posts: action.payload
            }
        case 'GET_POST':
            return {
                ...state,
                currentPost: action.payload
            }
        default:
            return state;
    }
}