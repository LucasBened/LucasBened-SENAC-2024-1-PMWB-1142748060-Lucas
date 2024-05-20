document.addEventListener('DOMContentLoaded', () => {
  const taskNameInput = document.getElementById('task-name')
  const addTaskButton = document.getElementById('add-task-button')
  const manageTasksButton = document.getElementById('manage-tasks-button')
  const taskInputSection = document.getElementById('task-input')
  const taskListSection = document.getElementById('task-list')
  const tasksTableBody = document.querySelector('#tasks-table tbody')
  const noTasksMessage = document.getElementById('no-tasks-message')
  const backButton = document.getElementById('back-button')

  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tarefas')) || []
    return tasks
  }

  function saveTasks(tasks) {
    localStorage.setItem('tarefas', JSON.stringify(tasks))
  }

  function addTask() {
    const taskName = taskNameInput.value.trim()
    if (taskName === '') return

    const tasks = loadTasks()
    tasks.push({ nome: taskName, status: 'A concluir' })
    saveTasks(tasks)
    taskNameInput.value = ''
  }

  function renderTasks() {
    const tasks = loadTasks()
    tasksTableBody.innerHTML = ''

    if (tasks.length === 0) {
      noTasksMessage.style.display = 'block'
      return
    }

    noTasksMessage.style.display = 'none'
    tasks.forEach((task, index) => {
      const row = document.createElement('tr')

      const nameCell = document.createElement('td')
      nameCell.textContent = task.nome

      const statusCell = document.createElement('td')
      statusCell.textContent = task.status

      const actionsCell = document.createElement('td')

      const toggleStatusButton = document.createElement('button')
      toggleStatusButton.textContent =
        task.status === 'A concluir' ? 'Concluir' : 'Reabrir'
      toggleStatusButton.addEventListener('click', () => {
        task.status = task.status === 'A concluir' ? 'Concluída' : 'A concluir'
        saveTasks(tasks)
        renderTasks()
      })

      const deleteButton = document.createElement('button')
      deleteButton.textContent = 'Excluir'
      deleteButton.addEventListener('click', () => {
        tasks.splice(index, 1)
        saveTasks(tasks)
        renderTasks()
      })

      actionsCell.appendChild(toggleStatusButton)
      actionsCell.appendChild(deleteButton)

      row.appendChild(nameCell)
      row.appendChild(statusCell)
      row.appendChild(actionsCell)

      tasksTableBody.appendChild(row)
    })
  }

  addTaskButton.addEventListener('click', addTask)

  manageTasksButton.addEventListener('click', () => {
    taskInputSection.style.display = 'none'
    taskListSection.style.display = 'block'
    renderTasks()
  })

  backButton.addEventListener('click', () => {
    taskListSection.style.display = 'none'
    taskInputSection.style.display = 'flex'
  })

  renderTasks() 
})
