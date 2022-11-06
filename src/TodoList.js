import React, { useState } from 'react';
import './App.css';

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

const deleteByIndex = index => {
    setTodos(oldValues => {
        return oldValues.filter((_, i) => i !== index);
    })
}
return (
<div>
    <div class="content-box">
    <label>Description: </label><input type="text" name="desc" onChange={inputChanged} value={todo.desc}/>
    <label>Date: </label><input type="date" name="date" onChange={inputChanged} value={todo.date}/>
    <button name="add" onClick={addTodo}>Add</button>
    </div>
    <table>
     <thead>
        <tr>
        <th>Date</th>
        <th>Description</th>  
        </tr>  
    </thead>   
    <tbody>     
      {
      todos.map((todo, index) => <tr key={index}>
        <td>{todo.date}</td>
        <td>{todo.desc}</td>
        <td><button onClick={() => deleteByIndex(index)}>Delete</button></td>
        </tr>)
      }
    </tbody>
    </table>
  </div>
);
}

