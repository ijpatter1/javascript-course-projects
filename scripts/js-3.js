function displayGenre(genre) {
    var genreType = genre.getAttribute("data-genre-type");
    alert(genre.innerHTML + " is a " + genreType + " movie.")
}