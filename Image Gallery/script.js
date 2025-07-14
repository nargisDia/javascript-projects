let scrollContainer = document.querySelector('.gallery');
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');

scrollContainer.addEventListener(
  'wheel',
  evt => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY * 3;
    scrollContainer.style.scrollBehaviar = 'auto';
  }
  // { passive: false }
);

nextBtn.addEventListener('click', () => {
  scrollContainer.style.scrollBehaviar = 'smooth';
  scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener('click', () => {
  scrollContainer.style.scrollBehaviar = 'smooth';
  scrollContainer.scrollLeft -= 900;
});
