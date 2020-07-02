export const addCoords = (coords) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({  //fix this line to the correct subcollection
            ...coords,
            fn: 'mark',
            ln: 'b',
            createdAt: new Date(),
            authId: 1234
        }).then(() => {
            dispatch({ type: 'ADD_COORDS', coords })
        }).catch((err) => {
            dispatch({ type: 'ADD_COORDS_ERROR', err })
        })
    }
}