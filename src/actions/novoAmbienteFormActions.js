import firebase from "../services/firebaseConnection"
export const SET_FIELD = 'SET_FIELD';

export const setField = (field, value) => {
 return {
    type: SET_FIELD,
    field,
    value
  }
}

export const AMBIENTE_SAVED = 'AMBIENTE_SAVED';
export const ambienteSaved = () =>{
  return{
    type: AMBIENTE_SAVED
  }
}

export const saveAmbiente = ambiente => {
  const {currentUser} = firebase.auth();
  
  return async dispatch => {
   await firebase
    .database()
    .ref(`/users/${currentUser.uid}/ambientes`)
    .push(ambiente);

    dispatch(ambienteSaved());
    
  }
  
}

