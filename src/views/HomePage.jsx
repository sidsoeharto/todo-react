import React from 'react'
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div id="main-page" class="container is-fluid mt-5">
      <div class="section p-0 is-medium is-justify-content-center">
        <div>
          <h1 class="title notification is-primary has-text-white-ter">Todo List:</h1> 
        </div>     
        <div id="add-todo" class="hero is-white">
          <form>
            <div class="field">
              <label for="todo-title">Title:</label>
              <input id="todo-title" class="input" placeholder="Enter Todo Title" />
            </div>
            <div class="field">
              <label for="todo-description" >Description</label>
              <textarea id="todo-description" class="textarea" rows="3" placeholder="Enter description"></textarea>
            </div>
            <div class="field">
              <label for="todo-due_date">Due Date</label>
              <input id="todo-due_date" type="date" class="input" />
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button type="submit" class="button is-link">Add</button>
                <button id="cancel-add" class="button is-danger">Cancel</button>
              </div>
            </div>
          </form>
        </div>
        <div class="columns is-white">
          <div id="news-today" class="column">
            <h1 class="is-size-4 has-text-black-ter m-3">News Today</h1>
            <div id="news">
            </div>
          </div>
          <div id="dashboard-main"class="column is-8 mt-3">
            <a id="add-button" class="button is-link" onclick="addTodoForm()">Add Todo</a><br />
            <div id="todo-list">
            </div>
          </div>
        </div>
      
      </div>
    </div>
  )
};