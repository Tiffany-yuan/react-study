/*
 * @Author: your name
 * @Date: 2021-09-07 21:06:50
 * @LastEditTime: 2021-09-07 21:59:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-study/src/k-react-router-dom/Route.js
 */
import React, { Component } from 'react'
import { RouterContext } from './RouterContext';

export default class Route extends Component {
    render() {
        return <RouterContext.Consumer>
            {context => {
                const { location } = context;
                const { path, component } = this.props;
                const match = location.pathname === path;
                return match ? React.createElement(component) : null;
            }}
        </RouterContext.Consumer>
    }
}
