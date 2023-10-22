import { createProjectPage } from "./pages/project.js";
import { createStudentPage } from "./pages/student.js";
import { createUserPage } from "./pages/user.js";

export const loadTablePage = async (page) => {
  const workarea = document.getElementById("work-area");
  workarea.innerHTML = "";

  if (page === "User") {
    createUserPage(workarea);
  } else if (page === "Student") {
    createStudentPage(workarea);
  } else if (page === "Project") {
    createProjectPage(workarea);
  }
};
