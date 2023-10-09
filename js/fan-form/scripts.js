const student = {
  jwt: null,
  id: null,
};
const BASE_URL = "http://localhost:8080/api";

document.addEventListener("DOMContentLoaded", () => {
  checkForLoggedIn();
  loginFormListeners();
  studentFormListeners();
});

function checkForLoggedIn() {
  if (student.jwt == null) {
    document.getElementById("headerText").textContent = "Please Log In";
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("studentForm").classList.add("hidden");
  } else {
    document.getElementById("headerText").textContent =
      "Student Submission Form";
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("studentForm").classList.remove("hidden");

    loadExistingData();
  }
}

function loginFormListeners() {
  document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const loginDto = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };

    const response = await fetch(`${BASE_URL}/auth/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginDto),
    });
    const json = await response.json();

    student.jwt = json.accessToken;
    student.id = json.id;

    checkForLoggedIn();
  });
}

function studentFormListeners() {
  document
    .getElementById("studentForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      const updateDto = {
        fanPageUrl: document.getElementById("fan-page-url").value,
        portfolioUrl: document.getElementById("portfolio-url").value,
      };

      const response = await fetch(`${BASE_URL}/student/${student.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${student.jwt}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateDto),
      });
      const json = await response.json();

      loadExistingData();
    });
}

async function loadExistingData() {
  const response = await fetch(`${BASE_URL}/student/${student.id}`);
  const json = await response.json();

  document.getElementById("fan-page-url").value = json.fanPageUrl;
  document.getElementById("portfolio-url").value = json.portfolioUrl;
}
