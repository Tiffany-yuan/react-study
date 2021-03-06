import React, { useCallback } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
import { useSelector, useDispatch } from '../kReactRedux/kReactRedux';

function ReactReduxHooksPages() {
    // 获取state
    const count = useSelector(({ count }) => count)
    // 获取dispatch
    const dispatch = useDispatch()
    const add = useCallback(
        () => {
            dispatch({type: 'ADD'})
        },
        [],
    )
    return (
        <div> 
            <button onClick={add}>{count}</button>
        </div>
    )
}

export default ReactReduxHooksPages
