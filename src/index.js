import React from "react";
import {
    Provider,
    connect
} from 'react-redux';
import Redux from "redux";
import thunk from 'redux-thunk';


import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.css"
// import Counter from "./component/counter.jsx";
// import Counters from "./component/counters.jsx";

//redux part





ReactDOM.render( < App / > , document.getElementById("root"));