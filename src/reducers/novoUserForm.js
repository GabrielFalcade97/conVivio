import { USER_SAVED } from "../actions";

const INITIAL_STATE = {
    id: null,
    nome: '',
    apartamento: '',
    email: '',
    senha: '',
    repetir_senha: ''
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case USER_SAVED:
            return INITIAL_STATE;
        default:
            return state;
    }
}