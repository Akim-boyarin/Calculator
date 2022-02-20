// ------------------------------------Styles modules------------------------------------
import './scss/main';

// -------------------------------------React modules------------------------------------
import React from 'react';
import { render } from 'react-dom';
import App from './App';


let root = document.querySelector("#app");
render(<App/>, root);