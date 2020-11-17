const initialState = {
    location: '',
    foci: '[]',
    updated: Date.now()
}

export default function nowReducer (state = initialState, action) {
    switch(action.type) {
        case 'GET_NOW':
            return {
                ...action.payload
            }
        default:
            return state;
    }
}