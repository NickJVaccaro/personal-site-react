const initialState = [ { } ];

export default function projectsReducer (state = initialState, action) {
    switch(action.type) {
        case 'GET_PROJECTS':
            let payload = action.payload;
            if(payload.type === 'software')
                payload.type = 'webdev';
            return payload;
        default:
            return state;
    }
}