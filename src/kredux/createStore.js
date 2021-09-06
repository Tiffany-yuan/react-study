import React from 'react'

export default function createStore(reducer, enhancer) {
    if (enhancer) {
        // enhancer是用于加强store.dispatch的
        return enhancer(createStore)(reducer);
    }
    let currentState;
    let currentListeners = [];
    function getState() {
        return currentState;
    }
    function dispatch(action) {
        currentState = reducer(currentState, action)
        currentListeners.forEach(listener => {
            listener();
        })
    }
    function subscribe(listener) {
        currentListeners.push(listener);
        return () => {
            // TODO 这里先简单处理。用filter或splice都行
            currentListeners = [];
        }
    }
    // 初始化
    dispatch({});
    return {
        getState,
        dispatch,
        subscribe
    }
} 
