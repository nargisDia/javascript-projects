// Generating a random number
let randomNum = Math.floor(Math.random() * 20 + 1);
let guessNum = (document.getElementById('guess').textContent = randomNum);

// Status Area
let rightMessage = document.querySelector('.message');
let wrongMessage = document.querySelector('.message');

// Win Message
let winImage = document.getElementById('win');

// Hiding Image
let hidingImage = document.getElementById('hide');

// Reset Button
let resetBtn = document
  .querySelector('#again')
  .addEventListener('click', () => {
    location.reload();
  });

// Storing Final Result
let finalResult = document.getElementById('score');
let initialScore = 0;

// Verifying output
let inputBtn = document.getElementById('input');
let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', () => {
  // Generating Final Attempt
  initialScore++;
  finalResult.textContent = initialScore;

  let guessOutput = inputBtn.value;
  if (guessOutput == guessNum) {
    rightMessage.textContent = '🎉Its Correct Number';
    winImage.style.display = 'block';
    // console.log('Success');
  } else if (guessOutput < guessNum) {
    // console.log('Failed');
    wrongMessage.textContent = '🙄Its Low Number';
    winImage.style.display = 'none';
    hidingImage.style.backgroundImage = "url('img/low.png.png')";
  } else if (guessOutput > guessNum) {
    // console.log('Failed');
    wrongMessage.textContent = '😎Its High Number';
    winImage.style.display = 'none';
    hidingImage.style.backgroundImage = "url('img/high.png.png')";
  }
});
