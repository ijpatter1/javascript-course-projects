function displayGenre(genre) {
    var genreType = genre.getAttribute("data-genre-type");
    alert(genre.innerHTML + " is a " + genreType + " movie.")
}
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }