import React from "react";
import ToDo from "./ToDo";
import './ToDoList.css';

function ToDoList ({todoList, setToDoList}) {
    return (
        <div className="Todo">
            {todoList.map((item, idx) => {
                return (
                    <ToDo className='List' todoList={todoList} setToDoList={setToDoList} id={idx} key={idx} todo={item} />
                )
            })}
        </div>
    )
}
export default ToDoList