// slider functionality

const sliderWrapper = document.getElementById("sliderWrapper");
const indicatorContainer = document.getElementById("sliderIndicators");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const sliderImages = [
  "./images/images/gym-1.png",
  "./images/images/gym-2.png",
  "./images/images/gym-3.png",
  "./images/images/gym-4.png",
];

// create slider function

function initializeSlider() {
  let currentIndex = 0;

  //create slider image
  sliderImages.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = image;
    img.alt = `Gym image ${index + 1}`;

    sliderWrapper.appendChild(img);

    const indicator = document.createElement("div");
    indicator.className = `indicators ${index === 0 ? "active" : ""}`;
    indicator.addEventListener("click", () => goToSlide(index));
    indicatorContainer.appendChild(indicator);
  });

  //update slider function
  const updateSlider = () => {
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

    //update indicators
    document.querySelectorAll(".indicators").forEach((indicators, index) => {
      indicators.classList.toggle("active", index === currentIndex);
    });
  };

  //go to the specific slider
  const goToSlide = (index) => {
    currentIndex = index;
    updateSlider();
  };

  //next btn click
  const nexSlide = () => {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    updateSlider();
  };

  nextBtn.addEventListener("click", nexSlide);

  //prev btn click
  const prevSlider = () => {
    currentIndex =
      (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    updateSlider();
  };
  prevBtn.addEventListener("click", prevSlider);

  // auto play using interval
  let autoplayInterval = setInterval(nexSlide, 2000);

  // pause autoplay on hover
  sliderWrapper.addEventListener("mouseenter", () => {
    clearInterval(autoplayInterval);
  });
  //autoplay
  sliderWrapper.addEventListener("mouseleave", () => {
    autoplayInterval = setInterval(nexSlide, 2000);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  initializeSlider();
});
