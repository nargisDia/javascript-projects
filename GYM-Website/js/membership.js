const membershipPlans = [
  {
    name: "Pass 'Trial'",
    price: "$ 0",
    features: [
      "Access to the gym from 8:00 to 14:00",
      "The trainer on duty will introduce you to the gym",
    ],
  },
  {
    name: "Pass 'Easy Start'",
    price: "$ 119",
    features: [
      "Visit without membership 24/7",
      "Individual training program",
      "Access tp tje VTRAMOER application",
      "Trainer support",
    ],
  },
  {
    name: "Pass 'Free Time'",
    price: "$ 49",
    features: [
      "The entance time to the gym is from 14:00 to 16:00",
      "Without suspension of gym membership",
      "The trainer on duty will introduce you to the gym",
    ],
  },
  {
    name: "Pass '1 Month 24/7'",
    price: "$ 85",
    features: [
      "Visit without restrictions 24/7",
      "The trainer on duty will introduce you to the gym",
    ],
  },
  {
    name: "Pass 'In Shape (AM)'",
    price: "$ 165",
    features: [
      "Training in mini-groups until 14:00",
      "Without suspension of gym membership",
      "Classes with a trainer in a mini-group 3 times a week",
      "Trainer support",
    ],
  },
  {
    name: "Pass 'In Shape (PM)'",
    price: "$ 195",
    features: [
      "Training in mini-groups until 17:00",
      "Without suspension of gym membership",
      "Classes with a trainer in a mini-group 3 times a week",
      "Trainer support",
    ],
  },
];

//function to render membershipPlans

function renderMembershipPlans() {
  const membershipGrid = document.getElementById("membershipPlans");

  membershipGrid.innerHTML = membershipPlans
    .map(
      (plan) => `
        
      
<div class="membership-card">
  <h3>${plan.name}</h3>
  <div class="price">${plan.price}</div>
  <ul>
  ${plan.features
    .map(
      (features) => `

<li>
      <img src="./images/images/icons/check-icon.png" alt="check-icon">
      <span>${features}</span>
    </li>

        `
    )
    .join("")}
    
  </ul>
  <button class="buy-btn">Buy</button>
</div>

`
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderMembershipPlans();
});
