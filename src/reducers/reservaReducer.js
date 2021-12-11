import { SET_RESERVAS } from "../actions";

export default function (state = null, action) {
    switch (action.type) {
        case SET_RESERVAS:
            return action.reservas;
        default:
            return state;
    }
}