 import React,{createContext , useContext, useEffect, useState} from "react";
 import { v4 as uuidv4 } from 'uuid';
 const TodoContext = createContext();

 export const TodoProvider = ({children}) => {
  const [filter , setFilter] = useState('all')
  const [ todos ,setTodos] = useState([
    {
      id: 1,
      text: "Learn Rect",
      completed: true,

    },]);

    const [ tempTodos ,setTempTodos ] = useState();



  const addTodo = (text) => setTodos(prev => [...prev,{id: uuidv4(), text:text,completed: false}])
  const toggleTodo =(id)=>{
  const cloned_todos =[...todos];

  const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
  const item = todos[itemIndex];
  item.completed = !item.completed;
  
  setTodos(cloned_todos);
    }
    //Sil
  const destroyTodo = (id) =>{
  const cloned_todos =[...todos];

  const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
    //kaç element silmek istediğini söyler
    cloned_todos.splice(itemIndex, 1);
    
    setTodos(cloned_todos);
  }
  const filterTodo = (filter)=>{
    if (filter == "clear"){
      setTodos([]);
    }else if(filter == "all"){
      setTodos(todos)
    }else if(filter == "active"){                                                                                       
      setTodos(todos.filter((t)=>t.completed == false))
      setTodos(tempTodos)
    }else if(filter == "completed"){
      setTodos(todos.filter((t)=>t.completed == true))
      
    }
  }
  const values = {
    todos,
     setTodos,
     addTodo,
     toggleTodo,
     destroyTodo,
     filter,
     setFilter,
     filterTodo,
     setTempTodos,
     
};
return<TodoContext.Provider value={values}>{children}</TodoContext.Provider>

};
export const useTodo = () => {
    const context = useContext (TodoContext);

    if(context === undefined){
        throw new Error ('useTodo hooku, TodoProvider bileşeni içinde çağrılmalıdır')
    }
    return context;
}