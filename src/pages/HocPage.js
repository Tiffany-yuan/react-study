import React, { Component } from 'react'

// hoc
// 高阶组件是个函数，参数为组件，返回值也是组件
const foo = Cmp => props => {
    return (
        <div className="border">
            <Cmp {...props} />
        </div>
    )
}

// function Child(props) {
//     return <div className="border">Child-{ props.name }</div>
// }

// const Foo = foo(Child)

// 使用装饰器，装饰器只用于类组件，所以这里我们需要重写下
@foo
class Child extends Component {
    render() { 
        return <div className="border">Child-{ this.props.name }</div>
    }
}

export default class HocPage extends Component {
    render() {
        return (
            <div>
                {/* <Foo name="yuan"></Foo> */}
                <Child name="装饰器yuan"/>
            </div>
        )
    }
}
