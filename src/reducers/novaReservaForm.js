import { SET_FIELD_RES, RESERVA_SALVA, SET_ALL_FIELDS_RES, RESETA_FORM_RES } from "../actions";

const INITIAL_STATE_RES = {
    id: null,
    data: '',
    morador: '',
    ambiente: ''
}

export default function (state = INITIAL_STATE_RES, action) {
    switch (action.type) {
        case SET_FIELD_RES:
            const clonedState = { ...state };
            clonedState[action.field] = action.value;
            return clonedState;
        case RESERVA_SALVA:
            return INITIAL_STATE_RES;
        case SET_ALL_FIELDS_RES:
            return action.reserva;
        case RESETA_FORM_RES:
            return INITIAL_STATE_RES;
        default:
            return state;
    }
}