import React from 'react'
import { useTodo } from '../contexts/TodoContext';

function ContentFooter() {

	const { todos ,filter , filterTodo} = useTodo();
	
	
  return (
    <footer className="footer">
		<span className="todo-count">		
			<strong>{todos.length} </strong>
			item{todos.length > 1 &&  's' }left
		</span>

		<ul className="filters">
			<li>
				<button  onClick={() => filterTodo("all")} className={filter === "all" ? "selected" :"" }>All</button>
			</li>
			<li>
				<button onClick={() => filterTodo("active")} className={filter === "active" ? "selected" :"" }>Active</button>
			</li>
			<li>
				<button onClick={() => filterTodo("completed")} className={filter === "completed" ? "selected" :"" }>Completed</button>
			</li>
		</ul>

		<button className="clear-completed" onClick={()=>filterTodo("clear")}>
			Clear completed
		</button>
	</footer>
  )
}

export default ContentFooter