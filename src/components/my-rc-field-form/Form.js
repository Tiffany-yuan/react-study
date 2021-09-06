import React from 'react'
import FieldContext from './FieldContext';
import useForm from './useForm'

export default function Form({ children, onFinish, onFinishFailed, form }, ref) {

    const [formInstance] = useForm(form);
    // class
    // useImperativeHandle可以让你在使用ref时自定义暴露给父组件的实例值
    React.useImperativeHandle(ref, () => formInstance);
    // class

    formInstance.setCallbacks({
        onFinish,
        onFinishFailed
    })
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                formInstance.submit();
            }}>
            <FieldContext.Provider value={formInstance}>
                {children}
            </FieldContext.Provider> 
        </form>
    )
}
