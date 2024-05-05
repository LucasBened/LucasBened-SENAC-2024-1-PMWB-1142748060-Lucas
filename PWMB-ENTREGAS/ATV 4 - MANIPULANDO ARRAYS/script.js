const lista = document.getElementById('lista')
const btn = document.getElementById('btn')
const clear = document.getElementById('clear')
let change = false
const filmes = [
  'Os Sete Samurais (1954)',
  'Bonnie e Clyde - Uma Rajada de Balas (1967)',
  'Apertem os Cintos. . . O Piloto Sumiu (1980)',
  'Outor Jivago (1965)',
  'Contatos Imediatos de Terceiro Grau (1977)',
  'Quem Quer Ser um Milionário? (2008)',
  'A Ponte do Rio Kwai (1957)',
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
