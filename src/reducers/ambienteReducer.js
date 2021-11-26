import { SET_AMBIENTES } from "../actions";


export default function(state = {}, action){
    switch(action.type){
        case SET_AMBIENTES: 
            console.log(action.ambientes);
            return action.ambientes;
        default:
            return state;
    }
}