import React, { Component } from 'react'
import FieldContext from './FieldContext';

export default class Field extends Component {
    static contextType = FieldContext;
    
    componentDidMount() {
        this.unregisterEntity = this.context.registerEntity(this);
    }

    componentWillUnmount() {
        if (this.unregisterEntity) {
            this.unregisterEntity();
        }
    }
    // 处理更新（我在这里只有设置初始值时未更新）
    onStoreChange = () => {
        this.forceUpdate()
    }

    getControlled = () => {
        const { getFieldValue, setFieldValue } = this.context;
        const { name } = this.props;
        return {
            value: getFieldValue(name), // 从formStore中读取数据
            onChange: e => {
                const newVal = e.target.value;
                // 设置formStore中的数据
                setFieldValue({ [name]: newVal });
                console.log("newVal", newVal);
            }
        }
    }
    render() {
        const { children } = this.props;
        return React.cloneElement(children, this.getControlled());
    }
}
