


// Generate a random version number or timestamp
// const cacheBuster = Date.now();

// const resourceURLs = [
//     '/my.css',
//     '/js/maxmain.js',
// ];

// let reloaded = false;

// // Function to reload the page
// function reloadPage() {
//     if (!reloaded) {
//         // Append cache buster parameter to each resource URL
//         resourceURLs.forEach(function(url) {
//             const updatedURL = url + '?v=' + cacheBuster;
//             const link = document.createElement('link');
//             link.href = updatedURL;
//             link.rel = 'stylesheet'; // Change to 'script' for JavaScript files
//             document.head.appendChild(link);
//         });

//         reloaded = true;
//     }
// }

// window.onload = reloadPage;


// // shareSocialMedia.json
// function shareSocialMedia(platform) {
//   const parentURL = window.location.href;

//   switch (platform) {
//     case "facebook":
//       window.open(
//         `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//           parentURL
//         )}`
//       );
//       break;
//     case "twitter":
//       window.open(
//         `https://twitter.com/intent/tweet?url=${encodeURIComponent(
//           parentURL
//         )}&text=Check%20out%20this%20awesome%20movie%20content!`
//       );
//       break;
//     case "linkedin":
//       window.open(
//         `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
//           parentURL
//         )}`
//       );
//       break;
//     case "whatsapp":
//       window.open(
//         `whatsapp://send?text=Check%20out%20this%20awesome%20movie%20content!%20${encodeURIComponent(
//           parentURL
//         )}`
//       );
//       break;
//     case "email":
//       window.location.href = `mailto:?subject=Check%20out%20this%20awesome%20movie%20content!&body=Check%20out%20this%20awesome%20content!%20${encodeURIComponent(
//         parentURL
//       )}`;
//       break;
//     default:
//       console.log("Unsupported platform.");
//   }
// }

// // playlist_scrol.json
// fetch("/movies.json")
//   .then((response) => response.json())
//   .then((data) => {
//     const playlistScrol = document.querySelector(".playlist_scrol");

//     data.forEach((movie) => {
//       const link = document.createElement("a");
//       link.className = "w-img";
//       const urlParts = movie["movie.watch"];
//       // const folderName = movie["movie.watch"];
//       link.href = `/${urlParts}`; // Append "index.html" at the end
//       // link.href = `/adult/${folderName}`; // Append "index.html" at the end
//       // link.href = `/movies/${folderName}`; // Append "index.html" at the end
//       // const urlParts = movie["movie.watch"].split("/");
//       // const folderName = urlParts;
//       // link.href = `${folderName}`; // Append "index.html" at the end

//       const img = document.createElement("img");
//       img.src = `/wp-content/uploads/2023/06/${movie.poster}`;
//       img.style.borderRadius = "10%";
//       img.style.border = "2px solid #40D7BC";
//       img.alt = movie.title;

//       const listItem = document.createElement("li");
//       listItem.className = "palylist-video";

//       link.appendChild(img);
//       listItem.appendChild(link);
//       playlistScrol.appendChild(listItem);
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching movie data:", error);
//   });


// // Define a function to display movies from a given JSON file
// function displayMovies(jsonFile, containerSelector) {
//   fetch(jsonFile)
//     .then((response) => response.json())
//     .then((data) => {
//       const container = document.querySelector(containerSelector);

//       data.forEach((movie) => {
//         const link = document.createElement("a");
//         link.className = "w-img";
//         const urlParts = movie["movie.watch"];
//         link.href = `/${urlParts}`; // Append "index.html" at the end

//         const img = document.createElement("img");
//         img.src = `/wp-content/uploads/2023/06/${movie.poster}`;
//         img.style.borderRadius = "10%";
//         img.style.border = "2px solid #40D7BC";
//         img.alt = movie.title;

//         const listItem = document.createElement("li");
//         listItem.className = "palylist-video";

//         link.appendChild(img);
//         listItem.appendChild(link);
//         container.appendChild(listItem);
//       });
//     })
//     .catch((error) => {
//       console.error("Error fetching movie data:", error);
//     });
// }

// // Display movies from both JSON files
// displayMovies("/movies.json", ".playlist_scrol");
// displayMovies("/playlist_scrol.json", ".playlist_scrol");



// // Define a function to display movies from a given JSON file
// function displayMovies(jsonFile, containerSelector) {
//   fetch(jsonFile)
//     .then((response) => response.json())
//     .then((data) => {
//       const container = document.querySelector(containerSelector);

//       data.forEach((movie) => {
//         const link = document.createElement("a");
//         link.className = "w-img";
//         const urlParts = movie["movie.watch"];
//         link.href = `/${urlParts}`; // Append "index.html" at the end

//         const img = document.createElement("img");
//         img.src = `/wp-content/uploads/2023/06/${movie.poster}`;
//         img.style.borderRadius = "10%";
//         img.style.border = "2px solid #40D7BC";
//         img.alt = movie.title;

//         const listItem = document.createElement("li");
//         listItem.className = "palylist-video";

//         link.appendChild(img);
//         listItem.appendChild(link);
//         container.appendChild(listItem);
//       });
//     })
//     .catch((error) => {
//       console.error("Error fetching movie data:", error);
//     });
// }

// // Display movies from both JSON files
// displayMovies("/movies.json", ".playlist_scrol");
// displayMovies("/playlist_scrol.json", ".playlist_scrol");

// // Fetch data from movies.json and populate schema data
// fetch("/movies.json")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((movieData, index) => {
//       const movieLink = document.querySelector(`.post-title[itemprop='url']:nth-child(${index + 1})`);
//       const movieName = document.querySelector(`[itemprop='name']:nth-child(${index + 1})`);

//       movieLink.href = movieData.url; // Replace with the actual URL property from movieData
//       movieLink.title = movieData.title; // Replace with the actual title property from movieData
//       movieName.textContent = movieData.name; // Replace with the actual name property from movieData
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching movie data:", error);
//   });


// /////////////////////////////////////          playlist_scrol.json - no movie schema
// fetch("/movies.json")
//   .then((response) => response.json())
//   .then((data) => {
//     const playlistScrol = document.querySelector(".playlist_scrol");

//     data.forEach((movie) => {
//       const link = document.createElement("a");
//       link.className = "w-img";
//       const urlParts = movie["movie.watch"];
//       // const folderName = movie["movie.watch"];
//       link.href = `/${urlParts}`; // Append "index.html" at the end
//       // link.href = `/adult/${folderName}`; // Append "index.html" at the end
//       // link.href = `/movies/${folderName}`; // Append "index.html" at the end
//       // const urlParts = movie["movie.watch"].split("/");
//       // const folderName = urlParts;
//       // link.href = `${folderName}`; // Append "index.html" at the end

//       const img = document.createElement("img");
//       img.src = `/wp-content/uploads/2023/06/${movie.poster}`;
//       img.style.borderRadius = "10%";
//       img.style.marginTop = "5px";
//       img.style.border = "2px solid #40D7BC";
//       img.alt = movie.title;

//       const listItem = document.createElement("li");
//       listItem.className = "palylist-video";
//       listItem.style.marginRight = "5px"; // Adjust the margin as needed

//       link.appendChild(img);
//       listItem.appendChild(link);
//       playlistScrol.appendChild(listItem);
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching movie data:", error);
//   });


// /////////////////////////////////////          playlist_scrol.json - no movie schema but with bookmark
fetch("/movies.json")
  .then((response) => response.json())
  .then((data) => {
    const playlistScrol = document.querySelector(".playlist_scrol");

    data.forEach((movie) => {
      // Create list item for the playlist
      const listItem = document.createElement("li");
      listItem.className = "palylist-video";
      listItem.style.marginRight = "5px";

      // Create link for the playlist item
      const link = document.createElement("a");
      link.className = "w-img";
      const urlParts = movie["movie.watch"];
      link.href = `/${urlParts}`;

      // Create image element
      const img = document.createElement("img");
      img.src = `/wp-content/uploads/2023/06/${movie.poster}`;
      img.style.borderRadius = "10%";
      img.style.marginTop = "5px";
      img.style.border = "2px solid #40D7BC";
      img.alt = movie.title;

      // Append image to the link
      link.appendChild(img);
      // Append link to the list item
      listItem.appendChild(link);

      // Append the list item to the playlist
      playlistScrol.appendChild(listItem);

      // Create list item for the post
      const postItem = document.createElement("li");
      postItem.className = "post-item";

      // Create span element for the post item
      const spanItem = document.createElement("span");
      spanItem.setAttribute("itemscope", "");
      spanItem.setAttribute("itemtype", "http://schema.org/Thing");

      // Create anchor element for the post title
      const aPostTitle = document.createElement("a");
      aPostTitle.className = "post-title";
      aPostTitle.href = `/${urlParts}`;
      aPostTitle.setAttribute("itemprop", "url");
      aPostTitle.setAttribute("rel", "bookmark");
      aPostTitle.setAttribute("title", "");

      // Create span element for the post title text
      const spanPostTitle = document.createElement("span");
      spanPostTitle.setAttribute("itemprop", "name");
      spanPostTitle.textContent = ""; // Leave this empty to not display the movie name

      // Append spanPostTitle to aPostTitle
      aPostTitle.appendChild(spanPostTitle);
      // Append aPostTitle to spanItem
      spanItem.appendChild(aPostTitle);
      // Append spanItem to postItem
      postItem.appendChild(spanItem);
      // Append postItem to the playlist
      playlistScrol.appendChild(postItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching movie data:", error);
  });






//Define a function to display movies from a given JSON file - with movie Schema
// function displayMovies(jsonFile, containerSelector) {
//   fetch(jsonFile)
//     .then((response) => response.json())
//     .then((data) => {
//       const container = document.querySelector(containerSelector);

//       data.forEach((movie) => {
//         const link = document.createElement("a");
//         link.className = "w-img";
//         const urlParts = movie["movie.watch"];
//         link.href = `/${urlParts}`; // Append "index.html" at the end

//         const img = document.createElement("img");
//         img.src = `/wp-content/uploads/2023/06/${movie.poster}`;
//         // img.style.marginTop = "5px";
//         // img.style.marginBottom = "5px";
//         img.style.marginLeft = "5px";
//         img.style.marginRight = "5px";
//         img.style.borderRadius = "10%";
//         img.style.border = "2px solid #40D7BC";
//         img.alt = movie.title;

//         const listItem = document.createElement("li");
//         listItem.className = "palylist-video";
//         listItem.style.marginRight = "5px"; // Adjust the margin as needed
//         listItem.style.marginTop = "5px"; // Adjust the margin as needed
//         listItem.style.marginBottom = "5px"; // Adjust the margin as needed

//         link.appendChild(img);
//         listItem.appendChild(link);
//         container.appendChild(listItem);

//         // Create schema.org structured data (JSON-LD)
//         const schemaData = {
//           "@context": "https://schema.org",
//           "@type": "Movie",
//           "name": movie.title,
//           // Add other schema.org properties as needed
//           "image": `/wp-content/uploads/2023/06/${movie.poster}`,
//           "url": `/${urlParts}`,
//           "description": movie.synopsis,
//           "director": {
//             "@type": "Person",
//             "name": movie.director
//           },
//           "actor": movie.starring.map((actor) => ({
//             "@type": "Person",
//             "name": actor
//           })),
//           "datePublished": movie.startDate,
//           "locationCreated": movie.country, 
//           "contentRating": movie.contentRating, 
//           "duration": movie.time, 
//           "inLanguage": movie.language, 
//           "genre": movie.genre, 
//           "aggregateRating": movie.aggregateRating,
//           "trailer": movie.trailer,
//           "author": {
//             "@type": "Person",
//             "name": "DrTrailer",
//             "url": "https://stream4free.vercel.app/DrTrailer.png"
//           },
//           "publisher": {
//             "@type": "Organization",
//             "name": "Stream4free?",
//             "logo": {
//               "@type": "ImageObject",
//               "url": "https://stream4free.vercel.app/og_image.jpg"
//             }
//           },
//           "additionalProperty": {
//             "@type": "PropertyValue",
//             "name": "Action Platform",
//             "value": ["Desktop Web Platform", "iOS Platform", "Android Platform"]
//           }
          
//         };

//         // Create a script element for JSON-LD
//         const scriptElement = document.createElement("script");
//         scriptElement.type = "application/ld+json";
//         scriptElement.textContent = JSON.stringify(schemaData);

//         // Append the script element to the head of the document
//         document.head.appendChild(scriptElement);
//       });
//     })
//     .catch((error) => {
//       console.error("Error fetching movie data:", error);
//     });
// }


// Display movies from both JSON files
displayMovies("/movies.json", ".playlist_scrol");
displayMovies("/playlist_scrol.json", ".playlist_scrol");

// Fetch data from movies.json and populate schema data
fetch("/movies.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((movieData, index) => {
      const movieLink = document.querySelector(`.post-title[itemprop='url']:nth-child(${index + 1})`);
      const movieName = document.querySelector(`[itemprop='name']:nth-child(${index + 1})`);

      movieLink.href = movieData.url; // Replace with the actual URL property from movieData
      movieLink.title = movieData.title; // Replace with the actual title property from movieData
      movieName.textContent = movieData.name; // Replace with the actual name property from movieData
    });
  })
  .catch((error) => {
    console.error("Error fetching movie data:", error);
  });



// skipAdButton1 & ad-video-1.js

// const skipAdButton1 = document.getElementById('skipAdButton1');
// const adVideo1 = document.getElementById('ad-video-1');

// skipAdButton1.addEventListener('click', () => {
//   adVideo1.currentTime = adVideo1.duration; // Skip to the end of the video
// });

// adVideo1.addEventListener('ended', () => {
//   skipAdButton1.style.display = 'none'; // Hide the "Skip Ad" button when the video ends
// });

// const skipAdButton2 = document.getElementById('skipAdButton2');
// const adVideo2 = document.getElementById('ad-video-2');

// skipAdButton2.addEventListener('click', () => {
//   adVideo2.currentTime = adVideo2.duration; // Skip to the end of the video
// });

// adVideo2.addEventListener('ended', () => {
//   skipAdButton2.style.display = 'none'; // Hide the "Skip Ad" button when the video ends
// });




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


// slider.js
// const slider = document.querySelector('.slider');
// const image = document.getElementById('image');
// let slideIndex = 0;
// let timer;
// const slideGap = 5000; // 5 seconds

// function startAutoSlider(movies) {
//   timer = setInterval(() => {
//     slideIndex = (slideIndex + 1) % movies.length;
//     updateSlider(movies);
//   }, slideGap);
// }

// function updateSlider(movies) {
//   const currentMovie = movies[slideIndex];
//   image.src = currentMovie.image;
//   image.alt = 'Slide';

//   const link = document.createElement('a');
//   // link.href = `${currentMovie['movie.watch']}`;
//   link.href = `/${currentMovie['movie.watch']}`;// Append "index.html" at the end

//       // link.href = `/movies/${currentMovie['movie.watch']}`;// Append "index.html" at the end
//   // Clear existing child nodes and append the image wrapped in the link
//   slider.innerHTML = '';
//   link.appendChild(image);
//   slider.appendChild(link);
// }

// fetch('/movies.json') // Update the path to your movies.json file
//   .then(response => response.json())
//   .then(data => {
//     const movies = data;
//     startAutoSlider(movies);
//   })
//   .catch(error => {
//     console.error('Error fetching movies:', error);
//   });

// DayNight.js
// const modeToggleBtn = document.getElementById("modeToggleBtn");
// const body = document.body;

// modeToggleBtn.addEventListener("click", toggleMode);

// var logoImage = document.querySelector(".logo");
// if (logoImage.style.display === "none") {
//   logoImage.style.display = "block";
// } else {
//   logoImage.style.display = "none";
// }

// function toggleMode() {
//   body.classList.toggle("night-mode");
//   if (body.classList.contains("night-mode")) {
//     modeToggleBtn.innerHTML =
//       '<img src="/wp-content/uploads/2023/05/day-and-night.png" alt="Back
//  Icon

// " style="height: 2em; margin-right: 4px;">' +
//       '<span class="text-2xl font-bold rounded-3xl" style="text-shadow: 2px 5px 5px #fff;">Night Mode</span>';
//   } else {
//     modeToggleBtn.innerHTML =
//       '<img src="/wp-content/uploads/2023/05/day-and-night.png" alt="Back
//  Icon

// " style="height: 2em; margin-right: 4px;">' +
//       '<span class="text-2xl font-bold rounded-3xl" style="background: linear-gradient(45deg, #0074cc, #ff00ff); border: 2px solid #40d7bc;">Day Mode</span>';
//   }
// }


// DayNight.js
// document.addEventListener("DOMContentLoaded", function () {
// const modeToggleBtn = document.getElementById("modeToggleBtn");
// const body = document.body;
// let isLogoVisible = true; // Track the visibility of the logo

// modeToggleBtn.addEventListener("click", toggleMode);

// function toggleMode() {
//   body.classList.toggle("night-mode");
  
  // Toggle the logo's visibility based on the current state
//   var logoImage = document.querySelector(".logo");
//   if (body.classList.contains("night-mode")) {
//     if (!isLogoVisible) {
//       logoImage.style.display = "block"; // Show the logo in Night Mode if it was hidden
//       isLogoVisible = true;
//     }
//   } else {
//     logoImage.style.display = "block"; // Always show the logo in Day Mode
//     isLogoVisible = true;
//   }

//   if (body.classList.contains("night-mode")) {
//     modeToggleBtn.innerHTML =
//       '<img src="/wp-content/uploads/2023/05/day-and-night.png" alt="Back
//  Icon

// " style="height: 2em; margin-right: 4px;">' +
//       '<span class="text-2xl font-bold rounded-3xl" style="text-shadow: 2px 5px 5px #fff;">Night Mode</span>';
//   } else {
//     modeToggleBtn.innerHTML =
//       '<img src="/wp-content/uploads/2023/05/day-and-night.png" alt="Back
//  Icon

// " style="height: 2em; margin-right: 4px;">' +
//       '<span class="text-2xl font-bold rounded-3xl" style="background: linear-gradient(45deg, #0074cc, #ff00ff); border: 2px solid #40d7bc;">Day Mode</span>';
//   }
// }
// });

// // disableCopy.js
// document.addEventListener('contextmenu', function (event) {
//   event.preventDefault();
//   showMessage('You can\'t right-click is disabled on this page.');
// });

// document.addEventListener('selectstart', function (event) {
//   event.preventDefault();
//   showMessage('Text selection is disabled on this page.');
// });

// document.addEventListener('dragstart', function (event) {
//   event.preventDefault();
//   showMessage('Image dragging is disabled on this page.');
// });

// function showMessage(message) {
//   const msgElement = document.createElement('div');
//   msgElement.className = 'custom-message';
//   msgElement.textContent = message;
//   document.body.appendChild(msgElement);
//   setTimeout(function () {
//     document.body.removeChild(msgElement);
//   }, 2000);
// }
// script.js

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");
  const content = document.getElementById("content");

  links.forEach((link) => {
      link.addEventListener("click", (event) => {
          event.preventDefault();
          const href = event.target.getAttribute("href");
          content.style.opacity = 0;

          setTimeout(() => {
              content.style.opacity = 1;
              fetch(href)
                  .then((response) => response.text())
                  .then((html) => {
                      content.innerHTML = html;
                  });
          }, 500); // Adjust the delay as needed
      });
  });
});
