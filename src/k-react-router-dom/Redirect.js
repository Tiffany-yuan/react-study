/*
 * @Author: your name
 * @Date: 2021-09-09 21:05:00
 * @LastEditTime: 2021-09-09 21:12:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-study/src/k-react-router-dom/Redirect.js
 */
import React, { Component } from 'react'
import { RouterContext } from './RouterContext'

export default class Redirect extends Component {
    render() {
        return (
            <RouterContext.Consumer>
                {context => {
                    const { history } = context;
                    const { to, push = false } = this.props;
                    return (
                        <LifeCycle onMount={() => {
                            push ? history.push(to) : history.replace(to);
                        }} />
                    )
                }}
            </RouterContext.Consumer>
        )
    }
}

class LifeCycle extends Component {
    componentDidMount() {
        if (this.props.onMount) {
            this.props.onMount.call(this, this)
        }
    }
    render() {
        return null
    }
}