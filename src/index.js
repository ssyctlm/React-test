import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './stores/store'
// import * as serviceWorker from "./serviceWorker";

import 'bootstrap/dist/css/bootstrap.css'
// import Counter from "./component/counter.jsx";
// import Counters from "./component/counters.jsx";

import {
  Provider
} from 'react-redux'

ReactDOM.render(< Provider store = { store } > < App / > </Provider>, document.getElementById('root'))
