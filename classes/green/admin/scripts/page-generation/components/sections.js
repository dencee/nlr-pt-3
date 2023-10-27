import { createModifyForm } from "./modal.js";
import { createTable } from "./table.js";

export const createHeader = (container, table) => {
  const header = container.appendChild(document.createElement("header"));
  const heading = header.appendChild(document.createElement("h1"));
  heading.textContent = `${table.name}s`;
};

export const createTableSection = (container, table) => {
  const section = container.appendChild(document.createElement("section"));
  createTable(section, table);
};

export const createCreateSection = (container, table) => {
  const button = container.appendChild(document.createElement("button"));
  button.textContent = `Create ${table.name}`;
  button.addEventListener("click", () => createModifyForm("create", table));
};
