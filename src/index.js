import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
import './assets/css/style.css';
import './assets/css/bootstrap-rtl.css';
// import Loader from './components/Loader';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);