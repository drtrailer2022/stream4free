
// Fetch the JSON data
fetch("https://stream4free.vercel.app/assets/movies.json")
  .then((response) => response.json())
  .then((data) => {
    const moviesList = document.getElementById("moviesList");

    // Iterate over the movies data and create HTML elements
    data.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.className = "movie-poster";
      movieElement.id = movie.id; // Set the id property of the movie element

      const badgeElement = document.createElement("span");
    badgeElement.className = `${
      movie.status === "New Movie 2023" || movie.badge === "New Movie 2023"
        ? "bg-green-500 "
        : movie.status === "Tv Series" || movie.badge === "Tv Series"
        ? movie.badge === "blue"
          ? "bg-blue-500"
          : "bg-blue-500"
        : movie.status === "Tv Series UpDated" || movie.badge === "Tv Series UpDated"
        ? "bg-yellow-500"
        : movie.status === "Live Sports" || movie.badge === "Live Sports"
        ? "bg-red-500"
        : movie.status === "Tv Show" || movie.badge === "Tv Show"
        ? movie.badge === "blue"
          ? "bg-blue-500"
          : "bg-blue-500"
        : movie.status === "Sports" || movie.badge === "Sports"
        ? movie.badge === "orange"
          ? "bg-orange-500"
          : "bg-orange-500"
        : ""
    } border border-white animate-pulse text-black font-bold py-1 px-2 rounded absolute top-2 left-2 text-bg`;
    badgeElement.style.transform = "scale(0.8)"; // Reduce the size of the badge
    badgeElement.textContent = movie.status || movie.badge;
    movieElement.appendChild(badgeElement);

      const posterElement = document.createElement("img");
      posterElement.className = "w-full h-auto rounded-lg";
      posterElement.src = movie.poster;
      posterElement.alt = movie.title;
      movieElement.appendChild(posterElement);

      const trailerElement = document.createElement("div");
      trailerElement.className = "movie-popup";


      const videoSrc = movie["movie.popup"];

     const iframeElement = document.createElement("iframe");
     iframeElement.setAttribute("src", videoSrc);
     iframeElement.setAttribute("allowfullscreen", "");
     iframeElement.setAttribute("frameborder", "0");
                      
     trailerElement.appendChild(iframeElement );

      movieElement.appendChild(trailerElement);
      

      const watchNowButton = document.createElement("a");
      watchNowButton.className = "watch-now-button";
      watchNowButton.innerText = "Watch Now";
      watchNowButton.href = movie["movie.watch"];
      movieElement.appendChild(watchNowButton);

      moviesList.appendChild(movieElement);
      
      // Add the title and name elements
      const titleElement = document.createElement("h2");
      titleElement.innerText = movie.title;
      titleElement.style.textAlign = "center";
      titleElement.style.fontWeight = "bold";
      titleElement.style.color = "#40D7BC";
      titleElement.style.fontSize = "30px"; // Add the font size property
      movieElement.appendChild(titleElement);

      const nameElement = document.createElement("p");
      nameElement.innerText = movie.genre;
      nameElement.style.textAlign = "center";
      nameElement.style.fontWeight = "bold";
      nameElement.style.color = "#C0C0C0";
      titleElement.style.fontSize = "30px"; // Add the font size property
      movieElement.appendChild(nameElement);

      moviesList.appendChild(movieElement);

   
    });
  })
  .catch((error) => {
    console.error("Error fetching movies data:", error);
  });


const modeToggleBtn = document.getElementById('modeToggleBtn');
const body = document.body;

modeToggleBtn.addEventListener('click', toggleMode);

var logoImage = document.querySelector('.logo');
if (logoImage.style.display === 'none') {
    logoImage.style.display = 'block';
} else {
    logoImage.style.display = 'none';
}


function toggleMode() {
  body.classList.toggle('night-mode');
  if (body.classList.contains('night-mode')) {
    modeToggleBtn.textContent = 'Night Mode';
  } else {
    modeToggleBtn.textContent = 'Day Mode';
  }
}


function fadeOut() {
document.body.classList.add('fade-out');
setTimeout(function() {
  window.location.href = ["movie.id"]; 
}, 300); // Set the same duration as the CSS transition
}

// Function to create and display the YouTube video in the movie popup
function openMoviePopup(videoId) {
  const trailerElement = document.createElement("div");
  trailerElement.className = "movie-popup";

  const iframeElement = document.createElement("iframe");
  iframeElement.setAttribute("src", `https://www.youtube.com/embed/${videoId}`);
  iframeElement.setAttribute("allowfullscreen", "");
  iframeElement.setAttribute("frameborder", "0");

  trailerElement.appendChild(iframeElement);

  movieElement.appendChild(trailerElement);
}

// Fetch the JSON data
fetch("https://stream4free.vercel.app/assets/movies.json")
  .then((response) => response.json())
  .then((data) => {
    const moviesList = document.getElementById("moviesList");

    // Iterate over the movies data and create HTML elements
    data.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.className = "movie-poster";
      movieElement.id = movie.id; // Set the id property of the movie element

      // ... Your existing code for creating the movie elements ...

      // Inside the data.forEach loop, add the following lines to handle the movie popup
      const videoId = movie["movie.trailer"];
      movieElement.addEventListener("mouseenter", () => openMoviePopup(videoId));
      movieElement.addEventListener("mouseleave", () => {
        // Remove the trailerElement from movieElement to hide the video
        const trailerElement = document.querySelector(".movie-popup");
        if (trailerElement) {
          movieElement.removeChild(trailerElement);
        }
      });

      // ... Rest of your code to append the movie elements to the moviesList ...
    });
  })
  .catch((error) => {
    console.error("Error fetching movies data:", error);
  });


