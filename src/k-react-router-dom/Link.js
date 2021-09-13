/*
 * @Author: your name
 * @Date: 2021-09-07 21:07:01
 * @LastEditTime: 2021-09-09 21:15:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-study/src/k-react-router-dom/Link.js
 */
import React, {useContext, forwardRef} from 'react'
import {RouterContext} from "./RouterContext"

// 如果要接收ref，可以用 forwardRef 实现转发
const Link = forwardRef(({ to, children, ...restProps }, ref) => {
    const context = useContext(RouterContext);
    const handleClick = event => {
        event.preventDefault();
        context.history.push(to)
    }
    return (
        <a href={to} {...restProps} onClick={handleClick} ref={ref}>
            {children}
        </a>
    )
})

export default Link
