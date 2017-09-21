
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  hashHistory
} from 'react-router-dom'
require("./style.sass");

ReactDOM.render(
  (<Router>
    <App/>
  </Router>
), document.getElementById('root'));
