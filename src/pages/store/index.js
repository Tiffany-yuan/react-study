// import { createStore, applyMiddleware, combineReducers } from "redux";
import { createStore, applyMiddleware, combineReducers } from "../../kredux"
// import thunk from "redux-thunk"; // 异步解决方案
// import logger from "redux-logger"; // 打印日志
// import promise from "redux-promise"; // 打印日志
import isPromise from "is-promise"; // 是否是promise校验库

export const counterReducer = (state = 0, {type, payload = 1}) => {
    switch (type) {
        case 'ADD':
            return state + payload;
        case 'MINUS':
            return state - payload;
    
        default:
            return state;
    }
}
const counterReducer2 = (state = {num: 0}, {type, payload}) => {
    switch (type) {
        case 'ADD2':
            return {...state, num: state.num + payload};
        default:
            return state;
    }
}

// const store = createStore(counterReducer, applyMiddleware(promise, thunk, logger));
const store = createStore(
    combineReducers({
        count: counterReducer,
        count2: counterReducer2,
        // 如果还有其他的reducer，可以继续在这里加
    }), applyMiddleware(promise, thunk, logger)
);

export default store;

function logger({ getState, dispatch }) {
    // compose 滴一个参数聚合函数，第二个参数 函数要传递的参数
    return next => action => {
        console.log("+++++++++++++++++++++++");
        const prevState = getState();
        console.log("prev state", prevState);

        // 这里要理解！！！
        const returnValue = next(action)

        const nextState = getState();

        console.log("next state", nextState);
        console.log("+++++++++++++++++++++++");

        return returnValue;
    }
}

function thunk({ getState, dispatch }) {
    // compose 滴一个参数聚合函数，第二个参数 函数要传递的参数
    return next => action => {
        // action 的数据结构  对象 或者 函数
        if (typeof action === 'function') {
            return action(dispatch, getState)
        }
        return next(action);
    }
}

function promise({ getState, dispatch }) {
    // compose 滴一个参数聚合函数，第二个参数 函数要传递的参数
    return next => action => {
        return isPromise(action) ? action.then(dispatch) : next(action);
    }
}


// import {createStore, combineReducers} from "redux";

// // 定义修改规则
// export const counterReducer = (state = 0, {type, payload = 1}) => {
//   switch (type) {
//     case "ADD":
//       return state + payload;
//     case "MINUS":
//       return state - payload;
//     default:
//       return state;
//   }
// };

// const store = createStore(combineReducers({count: counterReducer}));

// export default store;
