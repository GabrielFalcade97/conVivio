import { SET_FIELD, AMBIENTE_SAVED } from "../actions";

const INITIAL_STATE = {
    title: '',
    descricao: '',
    lotacao: '',
    img: ''
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_FIELD:
      const clonedState = {...state};
      clonedState[action.field] = action.value;
      return clonedState;
    case AMBIENTE_SAVED:
      return INITIAL_STATE;
    default:
      return state;
  }
}