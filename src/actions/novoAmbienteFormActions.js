import firebase from "../services/firebaseConnection"
export const SET_FIELD = 'SET_FIELD';

export const setField = (field, value) => {
  return {
    type: SET_FIELD,
    field,
    value
  }
}

export const AMBIENTE_SALVO = 'AMBIENTE_SALVO';
export const ambienteSalvo = () => {
  return {
    type: AMBIENTE_SALVO
  }
}

//para todos os campos que devem conter nas informações do ambiente
export const SET_ALL_FIELDS = 'SET_ALL_AMBIENTES';
export const setAllFields = ambiente => ({
  type: SET_ALL_FIELDS,
  ambiente: ambiente
});

export const RESETA_FORM = 'RESETA_FORM';
export const resetaForm = () => ({
  type: RESETA_FORM
})

//salvar ambiente
export const saveAmbiente = ambiente => {
  const { currentUser } = firebase.auth();

  return async dispatch => {
    if (ambiente.id) {

      await firebase
        .database()
        .ref(`/ambientes/${ambiente.id}`)
        .set(ambiente);

    } else {

      await firebase
        .database()
        .ref(`/ambientes`)
        .push(ambiente);

      dispatch(ambienteSalvo());
    }
  }
}

