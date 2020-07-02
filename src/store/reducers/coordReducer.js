const initState = {
}

const coordReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_COORDS':
            console.log('added coord', action.coords);
            return state;
        case 'ADD_COORDS_ERROR':
            console.log('error', action.err)
            return state;
        default:
            return state;
    }


}

export default coordReducer;