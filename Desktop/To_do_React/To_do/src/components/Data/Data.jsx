import React,{useState} from 'react'
import List from '../List/List';
import "./Data.css"
const Data = (p) => {
    const todo=p.todo;
    const setTodo = p.setTodo;
    
  return (
    <div className="task">
        {todo.map((value, index) => {
        return <List value={value} index={index} setTodo={setTodo} array={todo}/>;
        })}
  </div>
  )
}

export default Data