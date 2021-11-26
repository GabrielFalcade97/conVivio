import firebase from "../services/firebaseConnection"

export const SET_AMBIENTES = 'SET_AMBEINTES';

const setAmbientes = ambientes => ({
    type: SET_AMBIENTES,
    ambientes: ambientes
})

export const watchAmbientes = () =>{
    const {currentUser} = firebase.auth();

    return dispatch =>{
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/ambientes`)
            .on('value', snapshot =>{
                const ambientes = snapshot.val();
                const action = setAmbientes(ambientes);
                dispatch(action);
            })
    }
}



