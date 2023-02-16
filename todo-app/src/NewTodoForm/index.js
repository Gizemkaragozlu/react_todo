import React from 'react'
import { Formik ,Field, Form } from 'formik'
import validationsSchema from './validations'
import { useTodo } from '../contexts/TodoContext';


function NewTodoForm() {

const {addTodo} = useTodo();

  return (
<Formik initialValues={{
  text:"",
}}

onSubmit={(values, bag) => {
  console.log(values);
  //setTodos(prev => [...prev,{id: uuidv4(), text: values.text,completed: false}]);
  addTodo(values.text);
  bag.resetForm();

}}

validationsSchema={ validationsSchema }
>
  <Form>
    <Field
    className='new-todo'
    placeholder='What'
    autoFocus
    id="text"
    name="text"
 
    />
  </Form>
</Formik>
  );
}

export default NewTodoForm