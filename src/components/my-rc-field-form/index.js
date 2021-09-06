import React from 'react';
import _Form from './Form';
import Field from './Field';
import useForm from './useForm';

// const Form = _Form;
// class
const Form = React.forwardRef(_Form);
// class 
Form.useForm = useForm;

export { Field };
export default Form;
