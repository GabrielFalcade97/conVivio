import firebase from '../services/firebaseConnection';
export const SET_FIELD_RES = 'SET_FIELD_RES';

export const setFieldRes = (field, value) => {
    return {
        type: SET_FIELD_RES,
        field,
        value
    }
}

export const RESERVA_SAVED = 'RESERVA_SAVED';
export const reservaSaved = () =>{
    return{
        type: RESERVA_SAVED
    }
}

export const SET_ALL_FIELDS_RES = 'SET_ALL_RESERVAS';
export const setAllFieldsRes = reserva => ({
    type: SET_ALL_FIELDS_RES,
    reserva: reserva
});

export const saveReserva = reserva => {
    const {currentUser} = firebase.auth();

    return async dispatch => {
        if(reserva.id){
            await firebase
            .database()
            .ref(`/users/${currentUser.uid}/reservas/${reserva.id}`)
            .set(reserva);
        } else {
            await firebase
            .database()
            .ref(`/users/${currentUser.uid}/reservas`)
            .push(reserva);

            dispatch(reservaSaved());
        }
    }
}