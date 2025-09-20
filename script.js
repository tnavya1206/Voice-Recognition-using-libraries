// Check if browser supports speech recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert("Your browser does not support Speech Recognition. Try using Chrome.");
} else {
  const recognition = new SpeechRecognition();
  recognition.continuous = true; // Keep listening until stopped
  recognition.interimResults = true; // Show results while speaking
  recognition.lang = "en-US"; // Language

  const startBtn = document.getElementById("startBtn");
  const stopBtn = document.getElementById("stopBtn");
  const resultText = document.getElementById("resultText");

  // When recognition gets result
  recognition.onresult = (event) => {
    let transcript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
    }
    resultText.textContent = transcript;
  };

  // Start recognition
  startBtn.addEventListener("click", () => {
    recognition.start();
    resultText.textContent = "Listening...";
  });

  // Stop recognition
  stopBtn.addEventListener("click", () => {
    recognition.stop();
    resultText.textContent += " [Stopped]";
  });
}
