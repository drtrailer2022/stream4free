const audioIframe = document.getElementById('audioIframe');
const predefinedEqualizationValue = 70;
const predefinedNoiseReductionValue = 40;
const audioSourceQuality = "high";

function autoAdjustSoundEnhancements() {
    const iframeWindow = audioIframe.contentWindow;

    if (iframeWindow && iframeWindow.postMessage) {
        iframeWindow.postMessage({
            command: 'autoAdjustSoundEnhancements',
            equalizationValue: predefinedEqualizationValue,
            noiseReductionValue: predefinedNoiseReductionValue,
            audioSourceQuality: audioSourceQuality,
            // Add more parameters here as needed
            // For example:
            bassBoost: 8,
            trebleBoost: 5,
            stereoWideness: 10
        }, '*');
    }
}

const iframeAudioElement = audioIframe.contentDocument.getElementById('audioPlayer');

const iframeAudioContext = new (window.AudioContext || window.webkitAudioContext)();
const iframeSourceNode = iframeAudioContext.createMediaElementSource(iframeAudioElement);
const equalizer = iframeAudioContext.createBiquadFilter();

// Adjust the equalizer settings
equalizer.type = 'peaking';
equalizer.frequency.value = 1000;
equalizer.gain.value = 6;
equalizer.Q.value = 1.0;

// Add more audio processing nodes for additional enhancements
const bassBoost = iframeAudioContext.createBiquadFilter();
bassBoost.type = 'lowshelf';
bassBoost.frequency.value = 200; // Adjust the bass boost frequency
bassBoost.gain.value = 8; // Adjust the bass boost gain

const trebleBoost = iframeAudioContext.createBiquadFilter();
trebleBoost.type = 'highshelf';
trebleBoost.frequency.value = 4000; // Adjust the treble boost frequency
trebleBoost.gain.value = 5; // Adjust the treble boost gain

const stereoWideness = iframeAudioContext.createStereoPanner();
stereoWideness.pan.value = 0.1; // Adjust the stereo wideness

// Connect the audio nodes in the desired order
sourceNode.connect(bassBoost);
bassBoost.connect(trebleBoost);
trebleBoost.connect(stereoWideness);
stereoWideness.connect(equalizer);
equalizer.connect(iframeAudioContext.destination);

audioIframe.addEventListener('load', () => {
    autoAdjustSoundEnhancements();
});
