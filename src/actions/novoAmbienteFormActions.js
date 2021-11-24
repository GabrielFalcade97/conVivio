import firebase from "firebase";

export const SET_FIELD = 'SET_FIELD';

export const setField = (field, value) => {
 return {
    type: SET_FIELD,
    field,
    value
  }
}

export const salveAmbiente = ambiente => {
  const {currentUser} = firebase.auth();
  
  firebase
    .database()
    .reff(`users/${currentUser}/ambientes`)
    .push(ambiente)
    .then(() => {
      console.log('Ambiente cadastrado. Analise o console do firebase')
    })



}