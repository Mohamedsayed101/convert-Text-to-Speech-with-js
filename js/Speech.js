/*
        صل على محمد 

*/
// made by Mohamed Sayed

const textArea = document.getElementById("text");
const speakButton = document.getElementById("speak");
const voiceSelect = document.getElementById("voice");
const rateInput = document.getElementById("rate");
const pitchInput = document.getElementById("pitch");

let voices = [];

function populateVoices() {
  voices = window.speechSynthesis.getVoices();
  voiceSelect.innerHTML = "";

  voices.forEach((voice, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
}

function detectLanguage(text) {
  const arabicPattern = /[\u0600-\u06FF]/;
  return arabicPattern.test(text) ? "ar" : "en";
}

window.speechSynthesis.onvoiceschanged = populateVoices;

speakButton.addEventListener("click", () => {
  const text = textArea.value.trim();
  if (text === "") {
    alert("Please enter some text.");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);

  const selectedVoice = voices[voiceSelect.value];
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  } else {
    const lang = detectLanguage(text);
    const fallbackVoice = voices.find((v) => v.lang.startsWith(lang));
    if (fallbackVoice) {
      utterance.voice = fallbackVoice;
    }
  }

  utterance.rate = parseFloat(rateInput.value);
  utterance.pitch = parseFloat(pitchInput.value);

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
});
