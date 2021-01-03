import React, { Component } from 'react';

function TodoCard (props) {
  return (
    <div className="card mt-2">
      <div id="todo-${el.id}">
        <header className="card-header">
          <h5 className="card-header-title">{props.todo.title}</h5>
          <span className="icon">
            <input id="check-status-${el.id}" type="checkbox" onclick="changeStatus(${el.id}, ${el.status} )" />
          </span>
        </header>
        <div className="card-content">
          <div className="content">
            <time>{props.todo.due_date}</time>
            <br />
            <p>{props.todo.description}</p>
          </div>
        </div>
        <div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item" onclick="event.preventDefault();document.getElementById('edit-todo-${el.id}').style.display = 'block';document.getElementById('todo-${el.id}').style.display = 'none';">Update</a>
            <a href="#" className="card-footer-item" onclick="deleteTodo(${el.id})">Remove</a>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default TodoCard