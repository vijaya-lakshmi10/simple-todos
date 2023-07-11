// Write your code here

import './index.css'

const TodoItem = props =>{
    const {todoItems,deleteTodo}=props
    const {id,title}=todoItems
    const onDelete=()=>{
        deleteTodo(id)
    }
    return(
        <li className="todos-list">
        <div className="todos-container">
        <p className="todo-item">{title}</p>
        <button className="delete-btn" type="button" onClick={onDelete}>Delete</button>
        </div>
        </li>
    )
}
export default TodoItem
