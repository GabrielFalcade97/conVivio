import { SET_FIELD, RESERVA_SAVED, SET_ALL_FIELDS_RES } from "../actions";

const INITIAL_STATE = {
    id: null,
    data: '',
    morador: '',
    ambiente: ''
}

export default function(state = INITIAL_STATE, action){
    switch(action.type) {
        case SET_FIELD:
            const clonedState = {...state};
            clondedState[action.field]= action.value;
            return clonedState;
        case RESERVA_SAVED:
            return INITIAL_STATE;
        case SET_ALL_FIELDS_RES:
            return action.reserva;
        default: 
            return state;
    }
}