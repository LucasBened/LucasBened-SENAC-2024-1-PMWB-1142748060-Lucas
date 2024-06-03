let lista = document.getElementById('tarefas')
const button = document.getElementById('button')

let tarefas = []

button.addEventListener('click', () => {
  const taskInput = document.getElementById('taskInput').value
  let task = {}
  task.tarefa = taskInput
  task.concluida = 'não concluída'
  tarefas.push(task)
  console.log(task)
  let li = document.createElement('li')

  tarefas.forEach(tarefa => {
    li.innerHTML = `${tarefa.tarefa} - ${tarefa.concluida}`
    lista.appendChild(li)
    console.log(tarefas)  
  })

  console.log(tarefas)
})
