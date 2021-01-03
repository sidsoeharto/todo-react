import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function TodoCard (props) {
  function deleteTodo (id) {
    props.deleteTodo(id)
  }

  function updateTodo (id) {
    props.updateTodo(id)
  }

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
            <time>{moment(props.todo.due_date).format('MMMM Do YYYY')}</time>
            <br />
            <p>{props.todo.description}</p>
          </div>
        </div>
        <div>
          <footer className="card-footer">
            <Link className="card-footer-item" to={`/edit/${props.todo.id}`}>Update</Link>
            <a href="#" className="card-footer-item" onClick={() => deleteTodo(props.todo.id)}>Remove</a>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default TodoCard