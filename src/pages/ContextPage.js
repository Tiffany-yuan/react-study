import React, { Component } from 'react'
import { ThemeProvider } from '../Context'
import ConsummerPage from './ConsummerPage';
import ContextTypePage from './ContextTypePage'
import UserContextPage from './UserContextPage';

export default class ContextPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: {
                themeColor: 'red'
            }
        }
    }

    render() {
        const {theme} = this.state
        return ( 
            <div> 
                <h3>ContextPage</h3>
                <ThemeProvider value={theme}>
                    <ContextTypePage></ContextTypePage>
                    <UserContextPage></UserContextPage>
                    <ConsummerPage></ConsummerPage>
                </ThemeProvider>
                {/* <ContextTypePage theme={theme}></ContextTypePage> */}
            </div>
        )
    }
}


// 怎么使用context
// 1. ContextType 只能用在类组件当中，只能订阅单一的context来源
// 2. useContext 是个hook的api，只能用在函数组件和自定义hook当中，能订阅多个context来源
// 3. Consummer 可以用在函数组件和类组件中，也能订阅多个context来源

// 为什么有人说context不建议使用？
// 有很多组件中都有使用context，例如antd、react-router、react-redux
// context  消耗的性能很大，因为一旦有属性更新，它的所有子组件都要更新