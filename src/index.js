/*
 * @Author: your name
 * @Date: 2021-06-24 20:42:08
 * @LastEditTime: 2021-09-07 21:10:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-study/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './pages/store/';
// import { Provider } from 'react-redux';
import { Provider } from './kReactRedux/kReactRedux';
import RouteComponentPage from './pages/routerPages/RouteComponentPage';


ReactDOM.render(
  <Provider store={store}>
    <App />
    {/* <RouteComponentPage /> */}
  </Provider>,
  document.getElementById("root")
);
