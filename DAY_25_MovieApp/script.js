const btn = document.getElementById("search-btn");
btn.addEventListener("click", () => {
  const title = document.getElementById("movie-input").value;
  const apiKey = "b273d850";

  const url = `http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(`The movie data is : ${data}`);
      createMovieCard(data);
    });
});

function createMovieCard(movie) {
  const searchResults = document.getElementById("search-results");

  searchResults.innerHTML = "";

  const movieCard = document.createElement("div");
  movieCard.classList.add("movie-card");

  movieCard.innerHTML = `
        <img src="${movie.Poster}" alt="${movie.Title}" class="movie-poster">
        <div class="movie-info">
            <h2 class="movie-title">${movie.Title}</h2>
            <p class="release-year">${movie.Released}</p>
            <button class="more-info-btn">More Info</button>
        </div>
    `;

  searchResults.appendChild(movieCard);

  const moreInfoBtn = movieCard.querySelector(".more-info-btn");
  moreInfoBtn.addEventListener("click", () => {
    showMoreInfo(movie);
  });
}

function showMoreInfo(movie) {
  document.getElementById("modal-title").textContent = movie.Title;
  document.getElementById(
    "modal-release-year"
  ).textContent = `Released: ${movie.Released}`;
  document.getElementById(
    "modal-director"
  ).textContent = `Director: ${movie.Director}`;
  document.getElementById(
    "modal-actors"
  ).textContent = `Actors: ${movie.Actors}`;
  document.getElementById("modal-genre").textContent = `Genre: ${movie.Genre}`;
  document.getElementById("modal-plot").textContent = `Plot: ${movie.Plot}`;
  document.getElementById("modal-poster").src = movie.Poster;

  const modal = document.getElementById("movieModal");
  modal.style.display = "block";
}

const closeModal = document.getElementsByClassName("close")[0];
closeModal.addEventListener("click", () => {
  const modal = document.getElementById("movieModal");
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  const modal = document.getElementById("movieModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
