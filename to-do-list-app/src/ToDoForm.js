import React from "react";
import './ToDoForm.css';

function ToDoForm ({todo, setToDo, todoList, setToDoList}) {
    function handleChange (event) {
        setToDo({
            title: event.target.value,
            complete: false
        })
    }
    function handleSave (event) {
        event.preventDefault()
        setToDoList (
            [...todoList, todo]
        )
        setToDo({
            title: '',
            complete: false
        })
    }
    return (
        <div className="Form-field">
            <form className="Form">
                <label className="Label">
                    To Do:
                <input className="Input-field" type="text" name="todo" value={todo.title} onChange={handleChange} />
                </label>
                <button className="button" onClick={handleSave}>Save</button>
            </form>
        </div>
    )
}
export default ToDoForm