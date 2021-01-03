import React from 'react'
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "../axios";
import Swal from 'sweetalert2';

export default (props) => {
  let history = useHistory();
  const { id } = useParams();

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

  const updateTodo = (e) => {
    e.preventDefault();
    axios({
      url: '/todos/' + id,
      method: 'PUT',
      headers: {access_token: localStorage.getItem('access_token')},
      data: todo
    })
      .then((response) => {
        history.push("/")
        Swal.fire({
          icon: 'success',
          title: 'Your task has been updated',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((err) => {
        console.log(err.response.data);
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          text: err.response.data.msg,
        })
      })
  }

  const getTodo = () => {
    axios({
      url: '/todos/' + id,
      method: 'GET',
      headers: {access_token: localStorage.getItem('access_token')}
    })
      .then((response) => {
        setTodo(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  React.useEffect(() => {
    getTodo()
  }, [])

  return (
    <div id="main-page" className="container is-fluid mt-5">
      <div className="section p-0 is-medium is-justify-content-center">
        <div>
          <h1 className="title notification is-primary has-text-white-ter">Edit Todo:</h1> 
        </div>     
        <div id="add-todo" className="hero is-white">
          <form onSubmit={(e) => updateTodo(e)}>
            <div className="field">
              <label htmlFor="todo-title">Title:</label>
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
              <label htmlFor="todo-description" >Description</label>
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
              <label htmlFor="todo-due_date">Due Date</label>
              <input 
                id="todo-due_date" 
                type="date" 
                name="due_date" 
                class="input"
                value={due_date.slice(0, 10)}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button type="submit" className="button is-link">Add</button>
                <Link id="cancel-add" className="button is-danger" to="/home">Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}