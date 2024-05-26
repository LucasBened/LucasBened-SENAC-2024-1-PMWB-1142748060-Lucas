const API_KEY = 'f9d3ecdd730fe37596cde8d987f4f9a2'
const BASE_URL = 'https://api.themoviedb.org/3'

document.addEventListener('DOMContentLoaded', () => {
  fetchGenres()
  document
    .getElementById('genreSelect')
    .addEventListener('change', fetchMoviesByGenre)
})

async function fetchGenres() {
  const response = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=pt-BR`,
  )
  const data = await response.json()
  const genreSelect = document.getElementById('genreSelect')
  data.genres.forEach(genre => {
    const option = document.createElement('option')
    option.value = genre.id
    option.textContent = genre.name
    genreSelect.appendChild(option)
  })
}

async function fetchMoviesByGenre() {
  const genreId = document.getElementById('genreSelect').value
  const response = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=pt-BR`,
  )
  const data = await response.json()
  displayMovies(data.results)
}

function displayMovies(movies) {
  const moviesDiv = document.getElementById('movies')
  moviesDiv.innerHTML = ''
  movies.forEach(movie => {
    const movieElement = document.createElement('div')
    movieElement.classList.add('movie')
    movieElement.innerHTML = `<img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
                                          <h2>${movie.title}</h2>
                                          <p>${movie.overview}</p>`
    moviesDiv.appendChild(movieElement)
  })
}
