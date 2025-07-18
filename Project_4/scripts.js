// Select People
const peopleSum = document.querySelector('#peopleSum');

// Increment By One
const plusSum = document.querySelector('#plusSum');
let count = 1;
plusSum.addEventListener('click', () => {
  count++;
  peopleSum.innerHTML = count;
});

// Decrement By One
const minusSum = document.querySelector('#minusSum');
minusSum.addEventListener('click', () => {
  if (count > 1) {
    count--;
  }
  peopleSum.innerHTML = count;
});

// Calculate
const calculator = document.querySelector('#calculator');
calculator.addEventListener('click', () => {
  // Display Summary Tap
  document.querySelector('.total_per_person').style.display = 'block';

  // Calculating Tips
  const totalBill = Number(document.querySelector('#totalBill').value);
  const tipMain = Number(document.querySelector('#tipMain').value);
  let total = totalBill * (tipMain / 100);
  let finalPeople = peopleSum.innerHTML;

  // Display Total Bill and Total in Summary Tab
  document.querySelector('#finalBill').innerHTML = totalBill;
  document.querySelector('#tipAmount').innerHTML = total;

  const taxAmount = (document.querySelector('#taxAmount').innerHTML =
    (totalBill + 5) / 100);

  // Final Calculation
  document.querySelector('#totalPerPerson').innerHTML = (
    (totalBill + total + taxAmount) /
    finalPeople
  ).toFixed(2);
});
