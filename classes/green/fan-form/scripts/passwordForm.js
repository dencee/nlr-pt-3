import { getUserByUUID, setPassword } from "../../requests/requests.js";

let user;

document.addEventListener("DOMContentLoaded", () => {
  getUserData();
  attachListeners();
});

async function getUserData() {
  const urlParams = new URLSearchParams(window.location.search);
  const uuid = urlParams.get("u");
  user = await getUserByUUID(uuid);
  if (user === 404) {
    document.querySelector("main").classList.add("hidden");
    document.getElementById("already-set").classList.remove("hidden");
  }
  document.getElementById("username").textContent = user.username;
}

function attachListeners() {
  document
    .getElementById("passwordForm")
    .addEventListener("submit", handleFormSubmit);

  document.querySelectorAll("#passwordForm input").forEach((ele) => {
    ele.addEventListener("keyup", clearError);
  });
}

async function handleFormSubmit(e) {
  e.preventDefault();

  const password = document.getElementById("password").value;
  const passwordConfirm = document.getElementById("confirm-password").value;
  if (password !== passwordConfirm) {
    setError("Passwords do not match!");
    return;
  }
  if (password.length < 6) {
    setError("Password must be at least 6 characters long!");
    return;
  }

  const response = await setPassword(user.setPasswordUUID, password);
  if (response === 200) {
    location.href =
      "http://127.0.0.1:5501/classes/green/fan-form/studentSubmissionForm.html";
  } else {
    setError("Something went wrong! You should probably contact an admin.");
  }
}

function setError(error) {
  document.getElementById("form-error").textContent = error;
}

function clearError() {
  document.getElementById("form-error").textContent = "";
}
