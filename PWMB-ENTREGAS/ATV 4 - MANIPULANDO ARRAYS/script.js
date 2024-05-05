const lista = document.getElementById('lista')
const btn = document.getElementById('btn')
const clear = document.getElementById('clear')
let change = false
const filmes = [
  'Harry Potter',
  'Senhor dos Anéis',
  'Star Wars',
  'Matrix',
  'Vingadores',
  'Velozes e Furiosos',
  'Jurassic Park',
  'Piratas do Caribe',
  'O Rei Leão',
  'Toy Story',
]

btn.addEventListener('click', () => {
  filmes.forEach(filmes => {
    const li = document.createElement('li')
    li.innerHTML = ` ${filmes}`
    lista.appendChild(li)
  })
})

clear.addEventListener('click', () => {
  lista.innerHTML = ''
})
