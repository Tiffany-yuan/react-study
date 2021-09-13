/*
 * @Author: your name
 * @Date: 2021-09-08 21:13:37
 * @LastEditTime: 2021-09-09 20:04:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-study/src/k-react-router-dom/Switch.js
 */
import React, { Component } from 'react'
import matchPath from './matchPath';
import { RouterContext } from './RouterContext'

// 独占路由
// 遍历子节点，找到匹配的，就可以了
export default class Switch extends Component {
    render() {
        return (
            <RouterContext.Consumer>
                {context => {
                    const location = this.props.location || context.location;
                    let match; // 标记匹配
                    let element; // 记录匹配的元素
                    React.Children.forEach(this.props.children, child => {
                        if (match == null && React.isValidElement(child)) {
                            element = child;
                            match = child.props.path
                                ? matchPath(location.pathname, child.props)
                                : context.match;
                        }
                    })
                    // 将match传递下去
                    return match ? React.cloneElement(element, {computedMatch: match}) : null;
                }}
            </RouterContext.Consumer>
        )
    }
}

