import React from 'react'
import { Link } from 'react-router-dom';
import TodoCard from "../components/TodoCard"
import NewsCard from "../components/NewsCard"
import axios from '../axios'

export default (props) => {
  const [todos, setTodos] = React.useState([])
  const [todo, setTodo] = React.useState({})
  const [news, setNews] = React.useState({})

  function getTodos () {
    axios({
      url: '/todos',
      method: 'GET',
      headers: {access_token: localStorage.getItem('access_token')}
    })
      .then(response => {
        setTodos(response.data)
        console.log(response.data)
      })
      .catch(err => {
        console.log(err.response.data)
      })
  }

  function getNews () {
    axios({
      url: '/todos/news',
      method: 'GET',
      headers: {access_token: localStorage.getItem('access_token')}
    })
      .then(response => {
        setNews(response.data)
        console.log(response.data)
      })
      .catch(err => {
        console.log(err.response.data)
      })
  }

  React.useEffect(() => {
    getTodos();
  } ,[])

  React.useEffect(() => {
    getNews();
  }, [])

  return (
    <div id="main-page" className="container is-fluid mt-5">
      <div className="section p-0 is-medium is-justify-content-center">
        <div>
          <h1 className="title notification is-primary has-text-white-ter">Todo List:</h1> 
        </div>     
        <div class="columns is-white">
          <div id="news-today" class="column">
            <h1 class="is-size-4 has-text-black-ter m-3">News Today</h1>
            <div id="news">
              <NewsCard news={news}/>
            </div>
          </div>
          <div id="dashboard-main"class="column is-8 mt-3">
            <a id="add-button" class="button is-link">Add Todo</a><br />
            <div id="todo-list">
              {todos.map(todo => <TodoCard key={todo.id} todo={todo}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};