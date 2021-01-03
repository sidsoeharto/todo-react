import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import axios from '../axios'

export default (props) => {
  let history = useHistory()

  const [todo, setTodo] = React.useState({
    title: '',
    description: '',
    status: false,
    due_date: ''
  })

  const { title, description, status, due_date } = todo;

  const onInputChange = (e) => {
    setTodo({...todo, [e.target.name] : e.target.value})
  }

  const addTodo = (e) => {
    e.preventDefault();

    console.log(todo)

    axios({
      url: "/todos",
      method: "POST",
      headers: {access_token: localStorage.getItem('access_token')},
      data: todo
    })
      .then(response => {
        console.log(response.data)
        history.push("/home");
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div id="main-page" className="container is-fluid mt-5">
      <div className="section p-0 is-medium is-justify-content-center">
        <div>
          <h1 className="title notification is-primary has-text-white-ter">Add Todo:</h1> 
        </div>     
        <div id="add-todo" className="hero is-white">
          <form onSubmit={(e) => addTodo(e)}>
            <div className="field">
              <label for="todo-title">Title:</label>
              <input 
                id="todo-title" 
                className="input" 
                name="title" 
                placeholder="Enter Todo Title"
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="field">
              <label for="todo-description" >Description</label>
              <textarea 
                id="todo-description" 
                className="textarea" 
                rows="3" 
                name="description" 
                placeholder="Enter description"
                value={description}
                onChange={(e) => onInputChange(e)}
              ></textarea>
            </div>
            <div className="field">
              <label for="todo-due_date">Due Date</label>
              <input 
                id="todo-due_date" 
                type="date" 
                name="due_date" 
                class="input"
                value={due_date}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button type="submit" className="button is-link">Add</button>
                <button id="cancel-add" className="button is-danger">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}