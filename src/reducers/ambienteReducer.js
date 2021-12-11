import { SET_AMBIENTES } from "../actions";


export default function (state = null, action) {
    switch (action.type) {
        case SET_AMBIENTES:
            return action.ambientes;
        default:
            return state;
    }
}