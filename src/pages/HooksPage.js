import React, { useReducer, useEffect, useLayoutEffect } from 'react'
import { counterReducer } from './store'

const initArg = init => init - 0;
function HooksPage() {
    // reducer 是干嘛的？  是用来定义修改规则的 
    // useReducer 第一个参数是reducer， 第二个参数是初始值， 第三个参数可选 initArg的返回结果是真正的初始值
    // useReducer可以说是useState的替代方案，更适合逻辑复杂的情况，可复用的情况
    const [state, dispatch] = useReducer(counterReducer, "0", initArg);

    // 可以看作对应类组件中的三个生命周期
    // componentDidMount componentWillUnmount componentDidUpdate
    // ** 延迟执行 **
    useEffect(() => {
        console.log('useeffect');
        return () => {
            console.log('will unmount');
        }
    }, [])
    // ** 同步执行 **
    useLayoutEffect(() => {
        console.log('uselayouteffect');
        return () => {
            console.log('will unmount');
        }
    }, [])
    return (
        <div>
            <button onClick={()=>dispatch({type: 'ADD'})}>{state}</button>
        </div>
    )
    
}

export default HooksPage
