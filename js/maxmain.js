


// Generate a random version number or timestamp
const cacheBuster = Date.now();

// Construct the URLs with the cache buster parameter
const resourceURLs = [
    'https://stream4free.vercel.app/my.css',
    'https://stream4free.vercel.app/js/maxmain.js',
    // Add more resource URLs here
];

let reloaded = false;

// Function to reload the page
function reloadPage() {
    if (!reloaded) {
        // Append cache buster parameter to each resource URL
        resourceURLs.forEach(function(url) {
            const updatedURL = url + '?v=' + cacheBuster;
            const link = document.createElement('link');
            link.href = updatedURL;
            link.rel = 'stylesheet'; // Change to 'script' for JavaScript files
            document.head.appendChild(link);
        });

        // Mark as reloaded
        reloaded = true;
    }
}

window.onload = reloadPage;


// shareSocialMedia.json
function shareSocialMedia(platform) {
  const parentURL = window.location.href;

  switch (platform) {
    case "facebook":
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          parentURL
        )}`
      );
      break;
    case "twitter":
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          parentURL
        )}&text=Check%20out%20this%20awesome%20movie%20content!`
      );
      break;
    case "linkedin":
      window.open(
        `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
          parentURL
        )}`
      );
      break;
    case "whatsapp":
      window.open(
        `whatsapp://send?text=Check%20out%20this%20awesome%20movie%20content!%20${encodeURIComponent(
          parentURL
        )}`
      );
      break;
    case "email":
      window.location.href = `mailto:?subject=Check%20out%20this%20awesome%20movie%20content!&body=Check%20out%20this%20awesome%20content!%20${encodeURIComponent(
        parentURL
      )}`;
      break;
    default:
      console.log("Unsupported platform.");
  }
}

// playlist_scrol.json
fetch("https://stream4free.vercel.app/movies.json")
  .then((response) => response.json())
  .then((data) => {
    const playlistScrol = document.querySelector(".playlist_scrol");

    data.forEach((movie) => {
      const link = document.createElement("a");
      link.className = "w-img";
      const urlParts = movie["movie.watch"];
      // const folderName = movie["movie.watch"];
      link.href = `/${urlParts}`; // Append "index.html" at the end
      // link.href = `/adult/${folderName}`; // Append "index.html" at the end
      // link.href = `/movies/${folderName}`; // Append "index.html" at the end
      // const urlParts = movie["movie.watch"].split("/");
      // const folderName = urlParts;
      // link.href = `${folderName}`; // Append "index.html" at the end

      const img = document.createElement("img");
      img.src = `https://stream4free.vercel.app/wp-content/uploads/2023/06/${movie.poster}`;
      img.style.borderRadius = "10%";
      img.style.border = "2px solid #40D7BC";
      img.alt = movie.title;

      const listItem = document.createElement("li");
      listItem.className = "palylist-video";

      link.appendChild(img);
      listItem.appendChild(link);
      playlistScrol.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching movie data:", error);
  });




// skipAdButton1 & ad-video-1.js

const skipAdButton1 = document.getElementById('skipAdButton1');
const adVideo1 = document.getElementById('ad-video-1');

skipAdButton1.addEventListener('click', () => {
  adVideo1.currentTime = adVideo1.duration; // Skip to the end of the video
});

adVideo1.addEventListener('ended', () => {
  skipAdButton1.style.display = 'none'; // Hide the "Skip Ad" button when the video ends
});

const skipAdButton2 = document.getElementById('skipAdButton2');
const adVideo2 = document.getElementById('ad-video-2');

skipAdButton2.addEventListener('click', () => {
  adVideo2.currentTime = adVideo2.duration; // Skip to the end of the video
});

adVideo2.addEventListener('ended', () => {
  skipAdButton2.style.display = 'none'; // Hide the "Skip Ad" button when the video ends
});




// age restriction popup.js
document.addEventListener("DOMContentLoaded", function () {
  const agePopup = document.getElementById("agePopup");
  const enterButton = document.getElementById("enterButton");
  const exitButton = document.getElementById("exitButton");
  const overlay = document.querySelector(".overlay");
  // Show the age restriction popup after a certain duration (in milliseconds)
  const popupDuration = 1000; // Change this value to set the duration
  setTimeout(function () {
    agePopup.style.display = "block";
  }, popupDuration);

  enterButton.addEventListener("click", function () {
    agePopup.style.display = "none";
  });

  exitButton.addEventListener("click", function () {
    // You can implement your own behavior for the exit button
    // For example, redirecting the user to a safe page
  });
});


// // slider.js
const slider = document.querySelector('.slider');
const image = document.getElementById('image');
let slideIndex = 0;
let timer;
const slideGap = 5000; // 5 seconds

function startAutoSlider(movies) {
  timer = setInterval(() => {
    slideIndex = (slideIndex + 1) % movies.length;
    updateSlider(movies);
  }, slideGap);
}

function updateSlider(movies) {
  const currentMovie = movies[slideIndex];
  image.src = currentMovie.image;
  image.alt = 'Slide';

  const link = document.createElement('a');
  // link.href = `${currentMovie['movie.watch']}`;
  link.href = `/${currentMovie['movie.watch']}`;// Append "index.html" at the end

      // link.href = `/movies/${currentMovie['movie.watch']}`;// Append "index.html" at the end
  // Clear existing child nodes and append the image wrapped in the link
  slider.innerHTML = '';
  link.appendChild(image);
  slider.appendChild(link);
}

fetch('/movies.json') // Update the path to your movies.json file
  .then(response => response.json())
  .then(data => {
    const movies = data;
    startAutoSlider(movies);
  })
  .catch(error => {
    console.error('Error fetching movies:', error);
  });

// DayNight.js
const modeToggleBtn = document.getElementById("modeToggleBtn");
const body = document.body;

modeToggleBtn.addEventListener("click", toggleMode);

var logoImage = document.querySelector(".logo");
if (logoImage.style.display === "none") {
  logoImage.style.display = "block";
} else {
  logoImage.style.display = "none";
}

function toggleMode() {
  body.classList.toggle("night-mode");
  if (body.classList.contains("night-mode")) {
    modeToggleBtn.innerHTML =
      '<img src="https://stream4free.vercel.app/wp-content/uploads/2023/05/day-and-night.png" alt="Day and Night Icon" style="height: 2em; margin-right: 4px;">' +
      '<span class="text-2xl font-bold" style="text-shadow: 2px 5px 5px #fff;">Night Mode</span>';
  } else {
    modeToggleBtn.innerHTML =
      '<img src="https://stream4free.vercel.app/wp-content/uploads/2023/05/day-and-night.png" alt="Day and Night Icon" style="height: 2em; margin-right: 4px;">' +
      '<span class="text-2xl font-bold" style="text-shadow: 2px 5px 5px #000;">Day Mode</span>';
  }
}

// disableCopy.js
document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
  showMessage('You can\'t right-click is disabled on this page.');
});

document.addEventListener('selectstart', function (event) {
  event.preventDefault();
  showMessage('Text selection is disabled on this page.');
});

document.addEventListener('dragstart', function (event) {
  event.preventDefault();
  showMessage('Image dragging is disabled on this page.');
});

function showMessage(message) {
  const msgElement = document.createElement('div');
  msgElement.className = 'custom-message';
  msgElement.textContent = message;
  document.body.appendChild(msgElement);
  setTimeout(function () {
    document.body.removeChild(msgElement);
  }, 2000);
}
