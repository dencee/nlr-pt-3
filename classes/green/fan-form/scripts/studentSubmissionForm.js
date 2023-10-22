import {
  addProject,
  deleteProject,
  makeRequest,
  updateProject,
} from "../requests/requests.js";
const USERNAME = "student";
const PASSWORD = "sausages";
let selected = null;

const student = {
  jwt: null,
  id: null,
  name: null,
};
const BASE_URL = "http://localhost:8080/api";

document.addEventListener("DOMContentLoaded", async () => {
  // await testLogin();
  checkForLoggedIn();
  attachListeners();
});

async function testLogin() {
  const login = async () => {
    const loginDto = { username: USERNAME, password: PASSWORD };
    const json = await makeRequest(() =>
      fetch(`${BASE_URL}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginDto),
      })
    );

    return json;
  };

  const user = await login();
  student.jwt = user.accessToken;
  student.id = user.id;
  student.name = user.username;
}

function checkForLoggedIn() {
  if (student.jwt == null) {
    document.getElementById("loginFormWrapper").classList.remove("hidden");
    document.getElementById("editWrapper").classList.add("hidden");
  } else {
    document.getElementById("loginFormWrapper").classList.add("hidden");
    document.getElementById("editWrapper").classList.remove("hidden");

    loadExistingData();
  }
}

function attachListeners() {
  document
    .getElementById("loginForm")
    .addEventListener("submit", handleLoginSubmit);

  document
    .getElementById("studentForm")
    .addEventListener("submit", handleStudentFormSubmit);

  document
    .getElementById("project-form")
    .addEventListener("submit", handleProjectFormSubmit);

  document
    .querySelectorAll("#studentForm :is(input, textarea)")
    .forEach((ele) => {
      ele.addEventListener("keyup", () =>
        setSubmitButton(document.getElementById("student-submit"), true)
      );
    });

  document
    .querySelectorAll("#project-form :is(input, textarea)")
    .forEach((ele) => {
      ele.addEventListener("keyup", () => {
        const id = document
          .getElementById("project-form")
          .getAttribute("data-project-id");
        if (id != null) {
          setSubmitButton(document.getElementById("project-submit"), true);
        }
      });
    });
}

async function handleLoginSubmit(e) {
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
  student.name = json.username;

  checkForLoggedIn();
}

async function handleStudentFormSubmit(e) {
  e.preventDefault();

  const updateDto = {
    fanPageUrl: document.getElementById("fan-page-url").value,
    fanPageTitle: document.getElementById("fan-page-title").value,
    fanPageDescription: document.getElementById("fan-page-description").value,
    githubUrl: document.getElementById("github-url").value,
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
}

async function handleProjectFormSubmit(e) {
  e.preventDefault();

  const projectDTO = {
    student: {
      id: student.id,
    },
    url: document.getElementById("project-url").value,
    name: document.getElementById("project-name").value,
    description: document.getElementById("project-description").value,
  };
  console.log(projectDTO);

  if (this.getAttribute("data-http-verb") === "POST") {
    const response = await addProject(student.jwt, projectDTO);
    selected = response.id;
    loadExistingData();
  } else if (this.getAttribute("data-http-verb") === "PUT") {
    const response = await updateProject(
      student.jwt,
      projectDTO,
      this.getAttribute("data-project-id")
    );
    selected = response.id;
    loadExistingData();
  }
}

async function loadExistingData() {
  const response = await fetch(`${BASE_URL}/student/${student.id}`);
  const userData = await response.json();

  loadStudentData(userData);
  loadProjects(userData.projects);

  document.getElementById("welcome-user").textContent = userData.name;

  if (userData?.fanPageUrl != null) {
    setSubmitButton(document.getElementById("student-submit"), false);
  }
}

function loadStudentData(data) {
  document.getElementById("fan-page-url").value = data.fanPageUrl;
  document.getElementById("fan-page-title").value = data.fanPageTitle;
  document.getElementById("fan-page-description").value =
    data.fanPageDescription;
  document.getElementById("github-url").value = data.githubUrl;
}

function loadProjects(projects) {
  const projectMenu = document.getElementById("project-menu");
  projectMenu.innerHTML = "";
  projects.forEach((project) => {
    createProjectButton(projectMenu, project);
  });

  // add new
  createProjectButton(projectMenu);
}

function loadProject(data) {
  const wrapper = document.getElementById("project-form-wrapper");
  const form = document.getElementById("project-form");
  form.setAttribute("data-http-verb", data == null ? "POST" : "PUT");
  form.setAttribute("data-project-id", data?.id);

  const button = document.getElementById("project-submit");
  button.textContent = data == null ? "Add" : "Update";
  if (data == null) button.disabled = false;
  else setSubmitButton(button, false);

  document.getElementById("project-name").value = data?.name ?? "";
  document.getElementById("project-url").value = data?.url ?? "";
  document.getElementById("project-description").value =
    data?.description ?? "";

  wrapper.classList.remove("hidden");
}

function createProjectButton(container, data) {
  const buttonWrapper = container.appendChild(document.createElement("div"));

  const button = buttonWrapper.appendChild(document.createElement("button"));
  button.innerText = data == null ? "+ Add Project" : data.name;
  button.type = "button";
  button.classList.add("project-button", "button-reset");
  button.addEventListener("click", () => {
    loadProject(data);
    document
      .querySelectorAll(".project-button.selected")
      .forEach((ele) => ele.classList.remove("selected"));
    button.classList.add("selected");
  });

  if (data != null) {
    const deleteButton = buttonWrapper.appendChild(
      document.createElement("button")
    );
    deleteButton.classList.add("delete-button", "button-reset");
    deleteButton.addEventListener("click", async () => {
      const confirmDelete = confirm(
        `Are you sure you want to delete project: ${data.name}?`
      );
      if (!confirmDelete) return;
      await deleteProject(student.jwt, data.id);
      if (
        Number(
          document
            .getElementById("project-form")
            .getAttribute("data-project-id")
        ) === data.id
      ) {
        const wrapper = document.getElementById("project-form-wrapper");
        wrapper.classList.add("hidden");
      }
      loadExistingData();
    });
    const icon = deleteButton.appendChild(document.createElement("img"));
    icon.src = "./icon/delete.svg";
  }

  if (data?.id === selected) {
    loadProject(data);
    button.classList.add("selected");
  }
}

function setSubmitButton(submitButton, enable) {
  if (enable) {
    submitButton.textContent = "Update";
    submitButton.disabled = false;
  } else {
    submitButton.textContent = "Saved";
    submitButton.disabled = true;
  }
}
