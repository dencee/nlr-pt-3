const USER_API_URL = "https://api.github.com/users/";
//const USER_API_URL = 'http://www.localhost:8080/api';

// Array of all students
const studentList = [
  "sth84478",
  "stevegreen4",
  "thepudgypigeon",
  "jrhurleycode",
  "joelrennert",
  "jasondscott90",
  "heid9107",
  "emmycurry",
  "dubdayn",
  "stephnicoledev",
  "ashsherlin",
];

/**
 * Creates a small card for each student with basic information
 * @param {String} user
 */

function createUserCard(user) {
  // no avatar, name endpoint yet
  const cardHTML = `
        <div class="card">
            <div class = "user-info" id='${user.login}'>
                <img src = "${user.avatar_url}" alt = "${user.name}" class="user-img" />
                <h3 class="username">${user.name}</h3>
                <p class="bio">bio here</p> 
            </div>
            <div class="bar">
                <div class="emptybar"></div>
                <div class="filledbar"></div>
            </div>
        </div>
        
    `;

  // Create a new div element for the card
  const cardElement = document.createElement("div");
  cardElement.innerHTML = cardHTML;

  // Get the .all-profiles container and append the new card to it
  const allProfilesContainer = document.querySelector(".all-profiles");
  allProfilesContainer.appendChild(cardElement);
}

/**
 * Creates a big card for each student and adds a hidden attribute to it.
 * We can add more specific information here about each student
 * @param {student name} user
 */

async function createClickedCard(user) {
  // Fetch user repositories
  const reposResp = await fetch(USER_API_URL + user.login + "/repos");
  const reposData = await reposResp.json();
  const reposName = reposData.map((repo) => repo.name).join(", ");

  // Construct the card HTML with the user and repositories data
  const cardHTML = `
         <div class="selected-info" id="${user.login}" hidden>
             <img src="${user.avatar_url}" alt="${user.name}" class="user-img" />
             <h3 class="username">${user.name}</h3>
             <p class="repos">Repositories: ${reposName}</p>
         </div>
 `;

  // Create a new div element for the card
  const cardElement = document.createElement("div");
  cardElement.innerHTML = cardHTML;

  // Get the .selected-card container and append the new card to it
  // const bodyElement = document.querySelector('body');
  // const cartContainer = document.createElement("div");
  // cartContainer.classList.add('selected-card');
  // bodyElement.appendChild(cartContainer);


  const selectedProfileContainer = document.querySelector(".selected-card");
  selectedProfileContainer.appendChild(cardElement);
}

// Track the currently selected card that is displayed
let currentSelectedCard = null;

document.addEventListener("DOMContentLoaded", () => {
  // Create .user-info cards and their corresponding .selected-info cards
  studentList.forEach(async (studentUsername) => {
    // Fetch the user data
    const userResp = await fetch(USER_API_URL + studentUsername);
    const userData = await userResp.json();

    createUserCard(userData);
    createClickedCard(userData);

    // Attach a click event listener to the user card
    const userCard = document.querySelector(
      `.user-info[id="${userData.login}"]`
    );
    userCard.addEventListener("click", () => {
      // Find the selected-info element based on the user's login
      const selectedInfoElement = document.getElementById(userData.login);

      // If there's a currently selected card, hide it
      if (currentSelectedCard) {
        currentSelectedCard.hidden = true;
      }

      // Show the selected card
      selectedInfoElement.hidden = false;

      // Update the currently selected card
      currentSelectedCard = selectedInfoElement;
    });
  });
  createClickedCard();
});


// document.addEventListener('DOMContentLoaded', () => {
//   createClickedCard;
// });