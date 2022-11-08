import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function App() {
  // setting the state of the to do items
  const [todo, setToDo] = useState({
    title: "",
    complete: false
  })
  // using empty array to be able to use map? Sort of lost as to why we need this empty array
  const [todoList, setToDoList] = useState([])
  return (
    // need to recall the properties that were used in the previous components
   <div className='App'>
    <ToDoForm todo={todo} setToDo={setToDo} todoList={todoList} setToDoList={setToDoList} />
   <ToDoList setToDoList={setToDoList} todoList={todoList} />
   </div>
  );
}

export default App;
