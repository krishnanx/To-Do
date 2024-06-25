import React, { useState } from "react";
import "./ToDoForm.css";
import List from "../List/List";
const ToDoForm = (p) => {
  const [value, setValue] = useState("");
  const todo=p.todo;
  const setTodo = p.setTodo;
  // const HandleValue=
 
  return (
    <div className="ToDoForm">
        <div className="Add">
          <form id="Form">
            <div className="Input_div">
              <input
                type="text"
                placeholder="Enter your task"
                className="Input"
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                value={value}
              />
            </div>
            <div className="Submit_div">
              <button
                type="Submit"
                className="Submit"
                onClick={(e) => {
                  e.preventDefault();
                  //console.log(value);
                  setTodo([...todo, value]);
                  setValue("");
                }}
              >
                Add task
              </button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default ToDoForm;
