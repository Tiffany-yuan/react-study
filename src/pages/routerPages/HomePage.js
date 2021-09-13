/*
 * @Author: your name
 * @Date: 2021-09-06 20:39:35
 * @LastEditTime: 2021-09-09 21:12:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-study/src/pages/routerPages/HomePage.js
 */
import React from 'react'
// import { Redirect } from 'react-router'
import { Redirect } from "../../k-react-router-dom";

function HomePage() {
    return (
        <Redirect to="/user"/>
        // <div>
        //     HomePage
        // </div>
    )
}

export default HomePage
