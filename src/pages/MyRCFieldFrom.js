import React, { Component, useEffect } from 'react';
import Form, { Field } from '../components/my-rc-field-form';
// import Input from '../components/Input';

const nameRules = {required: true, message: "请输入姓名！"};
const passworRules = { required: true, message: "请输入密码！" };

// 函数组件
// function MyRCFieldFrom() {
//     console.log(Form)
//     const [form] = Form.useForm();

//     const onFinish = val => {
//         console.log('onFinish', val);
//     }
//     const onFinishFailed = val => {
//         console.log('onFinishFailed', val);
//     }
//     // 初次进入，设置默认值
//     useEffect(() => {
//         form.setFieldValue({ username: 'yuan' })
//     }, []);

//     return (
//         <div>
//             <h3>MyRCFieldFrom</h3>
//             <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
//                 <Field name="username" rules={[nameRules]}>
//                     <input type="text" />
//                     {/* <Input placeholder="username"></Input> */}
//                 </Field>
//                 <Field name="password" rules={[passworRules]}>
//                     <input type="text" />
//                     {/* <Input placeholder="password"></Input> */}
//                 </Field>
//                 <button>Submit</button>
//             </Form>
//         </div>
//     )
// }

// 类组件
class MyRCFieldFrom extends Component {
    formRef = React.createRef();

    componentDidMount() {
        console.log("form", this.formRef.current);
        this.formRef.current.setFieldValue({ username: 'yuan' })
    }
    
    onFinish = val => {
        console.log('onFinish', val);
    }
    onFinishFailed = val => {
        console.log('onFinishFailed', val);
    }
    
    render() {
        return (
            <div>
                <h3>MyRCFieldFrom</h3>
                <Form
                    ref={this.formRef}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}>
                    
                    <Field name="username" rules={[nameRules]}>
                        <input type="text" />
                    </Field>
                    <Field name="password" rules={[passworRules]}>
                        <input type="text" />
                    </Field>
                    <button>Submit</button>
                </Form>
            </div>
        )
    }
}

export default MyRCFieldFrom;
