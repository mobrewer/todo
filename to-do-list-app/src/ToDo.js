import React from "react";
import './ToDoList.css'

function ToDo({todo, id, toDoList, setToDoList}) {
    function handleClick (event) {
        event.preventDefault();
        toDoList[id] = {title: todo.title, complete: !todo.complete}
        setToDoList(
            [...toDoList]
        )
    }
    return (
        <div className="Todo-List">
            <div className="Div-List">
                <p className="List">{todo.title}</p>
                <p className="List 2" onClick={handleClick}>{todo.complete ? 'Mark as incomplete' : 'Mark as Complete'} {todo.complete}</p>
            </div>
        </div>
    )
}
export default ToDo