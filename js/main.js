// Fetch the movie data from movies.json
fetch("/movies.json")
  .then((response) => response.json())
  .then((data) => {
    const playlistScrol = document.querySelector(".playlist_scrol");

    data.forEach((movie) => {
      const link = document.createElement("a");
      link.className = "w-img";
      const urlParts = movie["movie.watch"].split("/");
      const folderName = urlParts[urlParts.length - 2];
      link.href = `/movies/${folderName}/index.html`; // Append "index.html" at the end

      const img = document.createElement("img");
      img.src = `../../wp-content/uploads/2023/06/${movie.poster}`;
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

// Fetch the movie data from movies.json
// fetch("/movies.json")
//   .then((response) => response.json())
//   .then((data) => {
//     const productSlider = document.querySelector(".product__slider-4");

//     data.forEach((movie) => {
//       const link = document.createElement("a");
//       const urlParts = movie["movie.watch"].split("/");
//       const folderName = urlParts[urlParts.length - 2];
//       link.href = `/movies/${folderName}/index.html`; // Append "index.html" at the end

//       const productItem = document.createElement("div");
//       productItem.className = "product__item";

//       const productWrapper = document.createElement("div");
//       productWrapper.className = "product__wrapper";

//       const productThumb = document.createElement("div");
//       productThumb.className = "product__thumb";

//       const img = document.createElement("img");
//       img.src = `../../wp-content/uploads/2023/06/${movie.poster}`;
//       img.style.borderRadius = "10%";
//       img.style.border = "2px solid #40D7BC"; // Add border style
//       img.alt = movie.title;

//       link.appendChild(img);
//       productThumb.appendChild(link);
//       productWrapper.appendChild(productThumb);
//       productItem.appendChild(productWrapper);

//       productSlider.appendChild(productItem);
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching movie data:", error);
//   });

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
      '<img src="/wp-content/uploads/2023/05/day-and-night.png" alt="Day and Night Icon" style="height: 2em; margin-right: 4px;">' +
      '<span class="text-2xl font-bold" style="text-shadow: 2px 5px 5px #fff;">Night Mode</span>';
  } else {
    modeToggleBtn.innerHTML =
      '<img src="/wp-content/uploads/2023/05/day-and-night.png" alt="Day and Night Icon" style="height: 2em; margin-right: 4px;">' +
      '<span class="text-2xl font-bold" style="text-shadow: 2px 5px 5px #000;">Day Mode</span>';
  }
}

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

(function (s, u, z, p) {
  (s.src = u), s.setAttribute("data-zone", z), p.appendChild(s);
})(
  document.createElement("script"),
  "https://inklinkor.com/tag.min.js",
  5741273,
  document.body || document.documentElement
);

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

const slider = document.querySelector('.slider');
const image = document.getElementById('image');
let slideIndex = 0;
let timer;
const slideGap = 5000; // 3 seconds

fetch('/movies.json') // Update the path to your movies.json file
  .then(response => response.json())
  .then(data => {
    const movies = data;
    startAutoSlider(movies);
  })
  .catch(error => {
    console.error('Error fetching movies:', error);
  });

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
  image.parentElement.href = currentMovie['movie.watch'];
}

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











function updateCarouselPosition() {
  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(-${slideIndex * imageWidth}px)`;

  if (slideIndex >= images.length) {
    slideIndex = 0;
    setTimeout(() => {
      carousel.style.transition = 'none'; // Disable transition for instant loop
      carousel.style.transform = 'translateX(0)';
    }, 500); // Wait for transition before resetting
  }
}

carousel.addEventListener('transitionend', () => {
  if (slideIndex >= images.length) {
    slideIndex = 0;
    carousel.style.transition = 'none'; // Disable transition for instant loop
    carousel.style.transform = 'translateX(0)';
  }
});



