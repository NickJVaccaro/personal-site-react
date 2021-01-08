const initialState = [ { } ];

export default function projectsReducer (state = initialState, action) {
    switch(action.type) {
        case 'GET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}