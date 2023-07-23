
// JavaScript code for fetching movie data and handling video overlay
const moviesList = document.getElementById('moviesList');

fetch('https://stream4free.vercel.app/assets/movies.json')
  .then((response) => response.json())
  .then((data) => {
    data.forEach(createMovieCard);
  })
  .catch((error) => {
    console.error('Error fetching movies data:', error);
  });

function createMovieCard(movie) {
  const movieElement = document.createElement('div');
  movieElement.classList.add('grid-item');

  // Create the container for the movie image and "Watch Now" button
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('movie-poster');

  const movieImage = document.createElement('img');
  movieImage.classList.add('movie-image');
  movieImage.src = movie.poster;
  movieImage.alt = movie.title;
  imageContainer.appendChild(movieImage);

  


  // Create the video overlay
  const videoOverlay = document.createElement('div');
  videoOverlay.classList.add('movie-popup');
  const videoElement = document.createElement('video');
  videoElement.controls = true;
  videoElement.muted = true;
  const sourceElement = document.createElement('source');
  sourceElement.src = movie['movie.trailer'];
  sourceElement.type = 'video/mp4';
  videoElement.appendChild(sourceElement);
  videoOverlay.appendChild(videoElement);
  movieElement.appendChild(videoOverlay);

  // Create the "Watch Now" button
  const watchNowButton = document.createElement('a');
  watchNowButton.className = 'watch-now-button';
  watchNowButton.innerText = 'Watch Now';
  watchNowButton.href = movie['movie.watch'];
  imageContainer.appendChild(watchNowButton);

  // Add the badge element
  const badgeElement = document.createElement('span');
  badgeElement.className = `${
    movie.status === 'New Movie 2023' || movie.badge === 'New Movie 2023'
      ? 'bg-green-500'
      : movie.status === 'Tv Series' || movie.badge === 'Tv Series'
      ? movie.badge === 'blue'
        ? 'bg-blue-500'
        : 'bg-blue-500'
      : movie.status === 'Tv Series UpDated' || movie.badge === 'Tv Series UpDated'
      ? 'bg-yellow-500'
      : movie.status === 'Live Sports' || movie.badge === 'Live Sports'
      ? 'bg-red-500'
      : movie.status === 'Tv Show' || movie.badge === 'Tv Show'
      ? movie.badge === 'blue'
        ? 'bg-blue-500'
        : 'bg-blue-500'
      : movie.status === 'Sports' || movie.badge === 'Sports'
      ? movie.badge === 'orange'
        ? 'bg-orange-500'
        : 'bg-orange-500'
      : ''
  } border border-white animate-pulse text-black font-bold py-1 px-2 rounded absolute top-2 left-2 text-bg`;
  badgeElement.style.transform = 'scale(0.8)'; // Reduce the size of the badge
  badgeElement.textContent = movie.status || movie.badge;
  imageContainer.appendChild(badgeElement);

  movieElement.appendChild(imageContainer);

// Add the title and genre elements
const titleElement = document.createElement('h2');
titleElement.innerText = movie.title;
titleElement.classList.add('movie-title');
titleElement.style.color = '#40D7BC';
titleElement.style.fontSize = '30px';
titleElement.style.textShadow = '3px 5px 5px #000';
movieElement.appendChild(titleElement);



  const genreElement = document.createElement('p');
  genreElement.innerText = movie.genre;
  genreElement.classList.add('movie-genre');
  genreElement.style.textShadow = '5px 5px 3px #000';
  movieElement.appendChild(genreElement);

  moviesList.appendChild(movieElement);

  // Event listener to show/hide the video overlay on image hover
  movieElement.addEventListener('mouseenter', () => {
    videoOverlay.style.display = 'block'; // Show the video overlay on hover
  });

  movieElement.addEventListener('mouseleave', () => {
    videoOverlay.style.display = 'none'; // Hide the video overlay when the mouse leaves the poster
  });
}


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

// Disable right-click
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  showMessage('You can\'t right-click on this page.');
});

// Disable text selection
document.addEventListener('selectstart', function(event) {
  event.preventDefault();
  showMessage('Text selection is disabled.');
});

// Disable image dragging
document.addEventListener('dragstart', function(event) {
  event.preventDefault();
  showMessage('Image dragging is disabled.');
});

// Minify HTML function
function minifyHTML(inputHTML) {
  const regexWhitespace = /(>\s+<)|(>)\s+|\s+(<)|(<!--[\s\S]*?-->)|<!--(?!<!)[\s\S]*?-->/g;
  return inputHTML.replace(regexWhitespace, (match, p1, p2, p3, p4) => {
    if (p1) return '><'; // Collapse whitespace between tags
    if (p2) return '>'; // Remove space after opening tag
    if (p3) return '<'; // Remove space before closing tag
    if (p4) return ''; // Remove HTML comments
  });
}

// Example usage:
document.addEventListener('DOMContentLoaded', function() {
  const inputHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Minify HTML</title>
    </head>
    <body>
      <div>
        <h1>Hello, World!</h1>
        <!-- Your HTML content goes here -->
      </div>
    </body>
    </html>
  `;

  const minifiedHTML = minifyHTML(inputHTML);
  console.log(minifiedHTML);
  showMessage('HTML minified!');
});
