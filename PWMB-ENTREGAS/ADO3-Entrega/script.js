const idade = document.getElementById('idade')
const submit = document.getElementById('submit')
const result = document.getElementById('result')
const img = document.getElementById('img')
const data = new Date()

submit.addEventListener('click', () => {
  const anoNascimento = data.getFullYear() - idade.value
  let sexoMasc = document.getElementById('sexoM')
  let sexoFem = document.getElementById('sexoF')
  result.innerHTML = `Você nasceu em ${anoNascimento}`

  if (sexoMasc.checked && sexoMasc.classList.contains('masc')) {
    result.innerText = `Você é do sexo masculino e nasceu em ${anoNascimento}.`
  } else if (sexoFem.checked && sexoFem.classList.contains('fem')) {
    result.innerText = `Você é do sexo feminino e nasceu em ${anoNascimento}.`
  }

  if (idade.value <= 10) {
    img.src = 'imgs/Crianca.png'
  } else if (idade.value <= 20) {
    img.src = 'imgs/Jovem.jpg'
  } else if (idade.value <= 50) {
    img.src = 'imgs/Adulto.jpg'
  } else {
    img.src = 'imgs/Idoso.jpg'
  }
})
