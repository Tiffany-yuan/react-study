import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './pages/store/';
// import { Provider } from 'react-redux';
import { Provider } from './kReactRedux/kReactRedux';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
