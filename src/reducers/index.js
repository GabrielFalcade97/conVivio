import {combineReducers} from "redux";
import userReducer from './userReducer'
import NovoAmbienteForm from "./novoAmbienteForm";

export default combineReducers({
    user: userReducer,
    ambienteForm: NovoAmbienteForm
});