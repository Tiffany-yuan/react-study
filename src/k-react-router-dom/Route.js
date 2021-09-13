/*
 * @Author: your name
 * @Date: 2021-09-07 21:06:50
 * @LastEditTime: 2021-09-09 20:41:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-study/src/k-react-router-dom/Route.js
 */
import React, { Component } from 'react'
import matchPath from './matchPath';
import { RouterContext } from './RouterContext';

export default class Route extends Component {
    render() {
        return <RouterContext.Consumer>
            {context => {
                const { location } = context;
                const { path, component, children, render, computedMatch } = this.props;
                // const match = location.pathname === path;
                const match = computedMatch
                    ? computedMatch
                    : path
                        ? matchPath(location.pathname, this.props)
                        : context.match;
                const props = {
                    ...context,
                    location,
                    match
                }
                // match children, component, render, null
                // not  match children(function), null
                return (
                    <RouterContext.Provider value={props}>
                        {match
                            ? children
                                ? typeof children === 'function'
                                    ? children(props)
                                    : children
                                : component
                                    ? React.createElement(component, props)
                                    : render
                                        ? render(props)
                                        : null
                            : typeof children === 'function'
                                ? children(props)
                                        : null
                        }
                    </RouterContext.Provider>
                )
            }}
        </RouterContext.Consumer>
    }
}
