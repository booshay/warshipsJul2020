export const addCoords = (coords) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const teamId = getState().firebase.auth.uid;
        const coordType = coords.coordType;
        console.log(profile)
        // firestore.collection('projects').add({  //fix this line to the correct subcollection
        firestore.collection('projects').doc(teamId).collection(coordType).add({
            ...coords,
            fn: 'mark',
            ln: 'b',
            createdAt: new Date(),
            authId: teamId
        }).then(() => {
            dispatch({ type: 'ADD_COORDS', coords })
        }).catch((err) => {
            dispatch({ type: 'ADD_COORDS_ERROR', err })
        })
    }
}