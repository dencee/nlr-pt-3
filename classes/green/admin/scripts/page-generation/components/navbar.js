import { loadTablePage } from "../work-area.js";

export const attachNavbarListeners = async () => {
  const li = document.querySelectorAll("#nav-bar li");
  li.forEach((ele) => {
    const entityName = ele.getAttribute("data-entity");
    ele.addEventListener("click", () => {
      li.forEach((ele) => ele.classList.remove("selected"));
      ele.classList.add("selected");
      loadTablePage(entityName);
    });
    ele.querySelector("a").addEventListener("click", (e) => e.preventDefault());
  });
};
