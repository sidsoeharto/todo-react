import React from 'react'

function AddTodo () {
  return (
    <div id="add-todo" className="hero is-white">
      <form>
        <div className="field">
          <label for="todo-title">Title:</label>
          <input id="todo-title" className="input" placeholder="Enter Todo Title" />
        </div>
        <div className="field">
          <label for="todo-description" >Description</label>
          <textarea id="todo-description" className="textarea" rows="3" placeholder="Enter description"></textarea>
        </div>
        <div className="field">
          <label for="todo-due_date">Due Date</label>
          <input id="todo-due_date" type="date" class="input" />
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button type="submit" classNAme="button is-link">Add</button>
            <button id="cancel-add" className="button is-danger">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddTodo