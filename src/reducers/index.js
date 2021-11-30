import {combineReducers} from "redux";
import userReducer from './userReducer'
import NovoAmbienteForm from "./novoAmbienteForm";
import ambienteReducer from "./ambienteReducer";
import novaReservaForm from "./novaReservaForm";
import reservaReducer from "./reservaReducer";

export default combineReducers({
    user: userReducer,
    ambienteForm: NovoAmbienteForm,
    listaAmbientes: ambienteReducer,
    reservaForm: novaReservaForm,
    listaReservas: reservaReducer,
});