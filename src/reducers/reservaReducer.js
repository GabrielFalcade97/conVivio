import { SET_RESERVAS } from "../actions";

export default function(state = null, action){
    switch(action.type){
        case SET_RESERVAS:
            console.log(action.reservas);
            return action.reservas;
        default: 
            return state;    
    }
}