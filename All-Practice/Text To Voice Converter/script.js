let speech = new SpeechSynthesisUtterance();

// language select
let voices = [];
let voiceSelect = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

//change language
voiceSelect.addEventListener('change', () => {
  speech.voice = voices[voiceSelect.value];
});

// speak speech
document.querySelector('button').addEventListener('click', () => {
  speech.text = document.querySelector('textarea').value;
  window.speechSynthesis.speak(speech);
});
