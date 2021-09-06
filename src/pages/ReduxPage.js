import React, { Component } from 'react'
import store from './store/'

export default class ReduxPage extends Component {
    componentDidMount() {
        // * 重点： 有订阅，一定得有取消订阅 *
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        })
    }
    componentWillUnmount() {
        this.unsubscribe && this.unsubscribe();
    }
    

    add = () => {
        store.dispatch({type: 'ADD', payload: 22})
    }
    add2 = () => {
        store.dispatch({type: 'ADD2', payload: 222})
    }
    asyncAdd = () => {
        store.dispatch((dispatch, getState) => {
            setTimeout(() => {
                dispatch({type: 'ADD', payload: 22})
            })
        })
    }
    promiseMins = () => {
        store.dispatch(
            Promise.resolve({
                type: 'MINUS',
                payload: 100
            })
        )
    }

    render() { 
        return (
            <div>
                <h3>ReduxPage</h3>
                <div>
                    {/* {store.getState()} */}
                    {store.getState().count}
                </div>
                <button onClick={this.add}>add</button><br/>
                <button onClick={this.asyncAdd}>asyncAdd</button>
                <button onClick={this.promiseMins}>promiseMins</button>
                <button onClick={this.add2}>{store.getState().count2.num}</button>
            </div>
        )
    }
}

// 流程：
/**
 * 1. createStore 创建 store
 * 2. reducer 初始化、修改状态函数
 * 3. getState 获取状态值
 * 4. dispatch 提交更新
 * 5. subscribe 更新订阅
*/



