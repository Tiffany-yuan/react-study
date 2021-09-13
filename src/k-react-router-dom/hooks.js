/*
 * @Author: your name
 * @Date: 2021-09-09 20:29:51
 * @LastEditTime: 2021-09-09 20:36:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-study/src/k-react-router-dom/hooks.js
 */
import React, {useContext} from 'react'
import { RouterContext } from './RouterContext'

// useHistory, useLocation, useRouterMatch, useParams
export const useHistory = (params) => {
    return useContext(RouterContext).history;
}

export const useLocation = (params) => {
    return useContext(RouterContext).location;
}

export const useRouteMatch = (params) => {
    return useContext(RouterContext).match;
}

export const useParams = (params) => {
    const match = useContext(RouterContext).match;
    return match ? match.params : {};
}

