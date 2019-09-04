import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/state";


let renderEnteriesTree = (state) =>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
};
renderEnteriesTree(store.getState());
store.subscribe(renderEnteriesTree);




