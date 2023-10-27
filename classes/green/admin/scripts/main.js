import { attachNavbarListeners } from "./page-generation/components/navbar.js";
import { loadTablePage } from "./page-generation/work-area.js";
import { login } from "./requests.js";

document.addEventListener("DOMContentLoaded", async () => {
  await login();
  attachNavbarListeners();
  loadTablePage("User");
});
