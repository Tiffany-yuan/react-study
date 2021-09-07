/*
 * @Author: your name
 * @Date: 2021-09-07 21:06:34
 * @LastEditTime: 2021-09-07 21:36:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-study/src/k-react-router-dom/BrowserRouter.js
 */
import { createBrowserHistory } from 'history';
import React, { Component } from 'react'
import Router from './Router';

export default class BrowserRouter extends Component {
    constructor(props) {
        super(props);
        this.history = createBrowserHistory();
    }
    render() {
        return <Router history={this.history} children={this.props.children}/>
    }
}
