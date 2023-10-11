const audio1Iframe = document.querySelector('iframe');
// // ... rest of the code

// const iframe = document.querySelector('iframe');
const predefinedEqualizationValue = 70; // Set your predefined equalization value here
const predefinedNoiseReductionValue = 40; // Set your predefined noise reduction value here
const audioSourceQuality = "high"; // Set the audio source quality (e.g., "high" or "low")

// Function to automatically adjust sound enhancements
function autoAdjustSoundEnhancements() {
    // If the iframe content is a web page with audio controls,
    // you can try to communicate with it if it supports auto adjustment
    const iframeWindow = iframe.contentWindow;

    // Send a message to the iframe with predefined settings
    if (iframeWindow && iframeWindow.postMessage) {
        iframeWindow.postMessage({ 
            command: 'autoAdjustSoundEnhancements',
            equalizationValue: predefinedEqualizationValue,
            noiseReductionValue: predefinedNoiseReductionValue,
            audioSourceQuality: audioSourceQuality
        }, '*');
    }
}

// Call the auto adjustment function when the iframe has loaded
iframe.addEventListener('load', autoAdjustSoundEnhancements);