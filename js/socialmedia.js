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
  