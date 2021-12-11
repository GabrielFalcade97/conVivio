import React from "react";
import Routers from "./Routers"
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import rootReducer from './reducers'

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(reduxThunk)
));

const convivioApp = prop => (
    <Provider store={store}>
        <Routers />
    </Provider>

)

export default convivioApp;