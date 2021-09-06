import React, {useRef} from 'react'

// 存储Form的数据
class FormStore {
    constructor() {
        // 这里存储Form要处理的数据
        this.store = {};
        // 源码中用的是数组
        this.fieldEntities = {};
        this.callbacks = {};
    }
    
    registerEntity = entity => {
        this.fieldEntities = {
            ...this.fieldEntities,
            [entity.props.name]: entity
        }
        return (() => {
            delete this.fieldEntities[entity.props.name]
        })
    }
    
    setCallbacks = cbs => {
        this.callbacks = {
            ...this.callbacks,
            ...cbs
        }
    }

    getFieldValue = (name) => {
        const val = this.store[name];
        return val;
    }

    setFieldValue = (newStore) => {
        console.log('newStore', newStore)
        // 修改store
        this.store = {
            ...this.store,
            ...newStore
        }
        // 更新组件
        Object.keys(newStore).forEach(name => {
            this.fieldEntities[name].onStoreChange();
        })
    }
    validate = () => {
        let err = [];
        Object.keys(this.fieldEntities).forEach(key => {
            let entity = this.fieldEntities[key];
            const { rules } = entity.props;
            const rule = rules && rules[0];
            console.log('cur', rule);
            const value = this.getFieldValue(key);
            if (rule && rule.required && value === undefined) {
                err.push({
                    [key]: rule.message,
                    value
                })
            }
        })
        return err;
    }

    submit = () => {
        console.log('submit');
        const err = this.validate();
        const { onFinish, onFinishFailed } = this.callbacks;
        if (err.length === 0) {
            console.log('success')
            onFinish && onFinish({...this.store});
        } else {
            onFinishFailed && onFinishFailed(err, {...this.store});
        }
    }
    
    getForm = () => {
        return {
            getFieldValue: this.getFieldValue,
            setFieldValue: this.setFieldValue,
            registerEntity: this.registerEntity,
            submit: this.submit,
            setCallbacks: this.setCallbacks,
        }
    }
}

// 自定义hook
export default function useForm(form) {
    const formRef = useRef();
    if (!formRef.current) {
        if (form) {
            formRef.current = form;
        } else {
            const formStore = new FormStore();
            // 这里不暴露整个实例，不安全，只把方法暴露出去
            formRef.current = formStore.getForm();
        }
        
    }

    return [formRef.current];
}
