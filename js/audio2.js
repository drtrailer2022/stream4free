  
  const audio2Iframe = document.querySelector('iframe');
  // // ... rest of the code
  
  // // Get the audio element and create an audio context
  // const iframe = document.querySelector('iframe');
  const audioElement = document.getElementById('audioPlayer');
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  // Create a source node from the audio element
  const sourceNode = audioContext.createMediaElementSource(audioElement);

  // Create audio effect nodes (e.g., equalizer, reverb)
  // You can customize these effects as needed
  const equalizer = audioContext.createBiquadFilter();
  equalizer.type = 'peaking'; // Set the filter type
  equalizer.frequency.value = 1000; // Adjust the frequency
  equalizer.gain.value = 6; // Adjust the gain (boost or cut)
  equalizer.Q.value = 1.0; // You might want to experiment with this
  // Connect the audio nodes in the desired order
  sourceNode.connect(equalizer);
  equalizer.connect(audioContext.destination);

  // When the user changes the equalizer settings, you can update the values like this:
  // equalizer.frequency.value = newFrequency;
  // equalizer.gain.value = newGain;