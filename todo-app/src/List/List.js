import React from 'react'
import { useTodo } from '../contexts/TodoContext';
import Item from './Item';

let filtered = null;

function List() {
    const {todos , filter} = useTodo();
//Tamamlanmıs olanlar
    filtered = todos;
    if(filter !== 'all'){
       filtered = todos.filter((todo) => filter === 'active'
        ? todo.completed === false && todo 
        : todo.completed === true && todo)
    };
  return (
    <ul className="todo-list">
        {
            todos.map(todo => (
                <Item key={todo.id} todo={todo} />
            ))
        }
</ul>
  )
}

export default List