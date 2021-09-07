/*
 * @Author: your name
 * @Date: 2021-09-07 21:25:21
 * @LastEditTime: 2021-09-07 21:31:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-study/src/k-react-router-dom/RouterContext.js
 */
import React from 'react'
// step1: 先创建一个Context对象
export const RouterContext = React.createContext();

// step2: 使用Provider传递value

// step3：子孙组件消费value：Consumer、useContext、contextType
// useContext只能用在函数组件或者自定义hook中
// contextType 只能用在类组件，并且只能订阅单一的context来源