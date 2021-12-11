import { SET_FIELD, AMBIENTE_SALVO, SET_ALL_FIELDS, RESETA_FORM } from "../actions";

const INITIAL_STATE = {
  id: null,
  title: '',
  descricao: '',
  lotacao: '',
  img: ''
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_FIELD:
      const clonedState = { ...state };
      clonedState[action.field] = action.value;
      return clonedState;
    case AMBIENTE_SALVO:
      return INITIAL_STATE;
    case SET_ALL_FIELDS:
      return action.ambiente;
    case RESETA_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
}