import React from "react";
import ReactDOM from "react-dom";
// Components imports
import App from "./App";
// CSS imports
import "./css/index.css";
//react router
import {BrowserRouter, Switch} from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
    <App />
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
