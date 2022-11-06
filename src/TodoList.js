import React, { useState } from 'react';
import './App.css';
import TodoTable from './TodoTable';

export default function TodoList() {
const [todo, setTodo] = useState({desc: '', date: ''});
const [todos, setTodos] = useState([]);


const inputChanged = (event) => {
  setTodo({...todo, [event.target.name]: event.target.value});
}

const addTodo = (event) => {
event.preventDefault();
  setTodos([...todos, todo]);
}

const deleteByIndex = (index) => {
    setTodos(oldValues => {
        return oldValues.filter((_, i) => i !== index);
    })
}

return (
<div>
    <div className="content-box">
    <label>Description: </label><input type="text" name="desc" onChange={inputChanged} value={todo.desc}/>
    <label>Date: </label><input type="date" name="date" onChange={inputChanged} value={todo.date}/>
    <button name="add" onClick={addTodo}>Add</button>
    </div>
    <TodoTable todos={todos} deleteByIndex={deleteByIndex}/>
  </div>
);
}

