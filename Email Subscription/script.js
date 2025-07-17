const scriptURL =
  'https://script.google.com/macros/s/AKfycbxkxhTv0ibrqM3nQs6TGMOtzF5KVB72Rz9bt5XLrMuAHLKW99erINalVoC9v3NL5Xx7-w/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = 'Thank You For Subscribing!';
      setTimeout(function () {
        msg.innerHTML = '';
      }, 5000);
      form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});
