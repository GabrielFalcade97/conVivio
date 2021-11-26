import {combineReducers} from "redux";
import userReducer from './userReducer'
import NovoAmbienteForm from "./novoAmbienteForm";
import ambienteReducer from "./ambienteReducer";

export default combineReducers({
    user: userReducer,
    ambienteForm: NovoAmbienteForm,
    listaAmbientes: ambienteReducer,
});