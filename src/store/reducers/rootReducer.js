import authReducer from './authReducer';
import coordReducer from './coordReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    coord: coordReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;