/*
 * @Author: your name
 * @Date: 2021-09-07 21:34:48
 * @LastEditTime: 2021-09-07 22:09:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-study/src/k-react-router-dom/Router.js
 */
import React, { Component } from 'react'
import { RouterContext } from './RouterContext'

export default class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: props.history.location
        }
        this.unListen = props.history.listen(({location}) => {
            this.setState({ location })
        })
    }
    componentWillUnmount() {
        if (this.unListen) {
            this.unListen()
        }
    }
    render() {
        return (
            <RouterContext.Provider value={{history: this.props.history, location: this.state.location}}>
                {this.props.children}
            </RouterContext.Provider>
        )
    }
}
