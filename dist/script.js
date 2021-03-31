function addMovie() {
  
    var fieldFilmFavorite = document.getElementById('movie')
    
    var favoriteMovie = fieldFilmFavorite.value
    if (favoriteMovie.endsWith('.jpg')) {
      listMoviesOnScreen(favoriteMovie)
    } else {
        alert("Imagem inválida")
    }
    fieldFilmFavorite.value = ""
}

function listMoviesOnScreen(movie) {
    var listMovies = document.querySelector('#moviesList')
    var elementMovie = "<img src=" + movie + ">"
    listMovies.innerHTML = listMovies.innerHTML + elementMovie
}