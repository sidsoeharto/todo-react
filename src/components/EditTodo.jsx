import React from 'react'

function EditTodo () {
  return (
    <div class="card mt-2">
      <form id="edit-todo-${el.id}" style="display:none;" onsubmit="editTodo(${el.id});event.preventDefault();">
        <header class="card-header">
          <input type="text" id="todo-title-${el.id}" class="input" placeholder="Enter Todo Title" value="${el.title}" />
        </header>
        <div class="card-content">
          <div class="content">
            <div class="field">
              <input id="todo-due_date-${el.id}" value="${date}" type="date" class="input" />
            </div>
            <br />
            <div class="field">
              <textarea id="todo-description-${el.id}" class="textarea" rows="3" placeholder="Enter description">${el.description}</textarea>
            </div>
          </div>
        </div>
        <div>
          <footer class="card-footer">
            <button class="card-footer-item has-text-white-bis has-background-link" type="submit">
              Edit
            </button>
            <a href="#" class="card-footer-item has-text-white-bis has-background-danger" onclick="event.preventDefault();document.getElementById('edit-todo-${el.id}').style.display = 'none';document.getElementById('todo-${el.id}').style.display = 'block';">
              Cancel
            </a>
          </footer>
        </div>
      </form>
    </div>
  )
}

export default EditTodo