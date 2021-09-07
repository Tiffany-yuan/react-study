/*
 * @Author: your name
 * @Date: 2021-09-07 21:07:01
 * @LastEditTime: 2021-09-07 21:49:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-study/src/k-react-router-dom/Link.js
 */
import React, {useContext} from 'react'
import {RouterContext} from "./RouterContext"

function Link({ to, children, ...restProps }) {
    const context = useContext(RouterContext);
    const handleClick = event => {
        event.preventDefault();
        context.history.push(to)
    }
    return (
        <a href={to} {...restProps} onClick={handleClick}>
            {children}
        </a>
    )
}

export default Link
