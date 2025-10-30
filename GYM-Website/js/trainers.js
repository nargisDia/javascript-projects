const trainers = [
  {
    name: "Victoria Shurpic",
    image: "./images/images/trainers/trainer-1.png",
    social: {
      facebook: "#",
      instragram: "#",
      twitter: "#",
    },
  },

  {
    name: "Elizabeth Lavrinenko",
    image: "./images/images/trainers/trainer-2.png",
    social: {
      facebook: "#",
      instragram: "#",
      twitter: "#",
    },
  },

  {
    name: "Ivan Gladkikh",
    image: "./images/images/trainers/trainer-3.png",
    social: {
      facebook: "#",
      instragram: "#",
      twitter: "#",
    },
  },

  {
    name: "Vladislav Kovalenko",
    image: "./images/images/trainers/trainer-4.png",
    social: {
      facebook: "#",
      instragram: "#",
      twitter: "#",
    },
  },

  {
    name: "Olga Kovalenko",
    image: "./images/images/trainers/trainer-5.png",
    social: {
      facebook: "#",
      instragram: "#",
      twitter: "#",
    },
  },

  {
    name: "Dmitry Petrov",
    image: "./images/images/trainers/trainer-6.png",
    social: {
      facebook: "#",
      instragram: "#",
      twitter: "#",
    },
  },

  {
    name: "Anna Volkova",
    image: "./images/images/trainers/trainer-7.png",
    social: {
      facebook: "#",
      instragram: "#",
      twitter: "#",
    },
  },

  {
    name: "Mikhail Sokolov",
    image: "./images/images/trainers/trainer-8.png",
    social: {
      facebook: "#",
      instragram: "#",
      twitter: "#",
    },
  },
];

// initialize variables
const trainersGrid = document.getElementById("trainersGrid");

const initialTrainers = () => {
  trainersGrid.innerHTML = trainers
    .map((trainer) => createTrainerCard(trainer))
    .join("");
};

const createTrainerCard = (trainer) => {
  return `
  <div class="trainer-card">
        <img src="${trainer.image}" alt="">
        <h3>${trainer.name}</h3>
        <div class="social-links">
          <a href="#" class="social-icon">
            <img src="./images/images/icons/facebook.png" alt="" >
          </a>
            <a href="#" class="social-icon">
            <img src="./images/images/icons/instagram.png" alt="">
          </a>
            <a href="#" class="social-icon">
            <img src="./images/images/icons/twitter.png" alt="">
          </a>
        </div>
      </div>`;
};

document.addEventListener("DOMContentLoaded", () => {
  initialTrainers();
});
