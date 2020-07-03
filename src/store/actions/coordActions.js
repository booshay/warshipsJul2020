export const addCoords = (coords) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        const teamId = getState().firebase.auth.uid;
        const coordType = coords.coordType === 'bases' ? 'rss' : 'mine';


        firestore.collection('team').doc(teamId).collection(coordType).add({ //set to team when done
            ...coords,
            authId: teamId
        }).then(() => {
            const notification = coords.coordType === 'bases' ?
                ` added a new base to our list` :
                ` added a new ${coords.type} lvl ${coords.lvl} mine to our list`

            firestore.collection('team').doc(teamId).collection('notifications').add({
                createdAt: new Date(),
                addedBy: coords.userName,
                content: notification
            })
        }).then(() => {
            dispatch({ type: 'ADD_COORDS', coords })
        }).catch((err) => {
            dispatch({ type: 'ADD_COORDS_ERROR', err })
        })
    }
}