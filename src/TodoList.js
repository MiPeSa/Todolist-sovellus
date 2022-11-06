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

return (
  <div>
    <body>
    <label>Description: </label><input type="text" name="desc" onChange={inputChanged} value={todo.desc}/>
    <label>Date: </label><input type="date" name="date" onChange={inputChanged} value={todo.date}/>
    <button onClick={addTodo}>Add</button>
    </body>
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
        </tr>)
      }
    </tbody>
    </table>
  </div>
);
}

