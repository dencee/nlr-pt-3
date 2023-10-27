import { capitalize } from "../utils/utils.js";
import { loadTablePage } from "../work-area.js";
import { createTBody, createTHead } from "./table.js";

export const createDeleteConfirm = (table, id) => {
  const container = document.createElement("div");

  const header = container.appendChild(document.createElement("h2"));
  header.textContent = `Are you sure you want to delete record with id: ${id}?`;
  header.classList.add("modal-content--header");

  const deleteButton = container.appendChild(document.createElement("button"));
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", async () => {
    const response = await table.requests.delete(id);

    if (response != null) {
      loadTablePage(table.name);
      container.closest(".modal-overlay").remove();
    } else {
      document.querySelector(".error").textContent = "Failed to update record.";
    }
  });

  const error = container.appendChild(document.createElement("p"));
  error.classList.add("error");

  openModal(container);
};

export const createModifyForm = (mode, table, row) => {
  const container = document.createElement("div");

  const header = container.appendChild(document.createElement("h2"));
  header.textContent = `${capitalize(mode)} ${table.name}`;
  header.classList.add("modal-content--header");

  const form = container.appendChild(document.createElement("form"));
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = [...e.target.elements]
      .filter((ele) => ele.name)
      .reduce((data, ele) => {
        if (ele.multiple) {
          data[ele.name] = [...ele.querySelectorAll("option")].reduce(
            (arr, o) => (o.selected ? [...arr, o.value] : arr),
            []
          );
        } else if (ele.name === "student") {
          data[ele.name] = { id: ele.value };
        } else {
          data[ele.name] = ele.value;
        }
        return data;
      }, {});

    const response = await table.requests[mode](data);

    if (response != null) {
      loadTablePage(table.name);
      form.closest(".modal-overlay").remove();
    } else {
      document.querySelector(
        ".error"
      ).textContent = `Failed to update ${table.name.toLowerCase()}.`;
    }
  });

  const tableEle = form.appendChild(document.createElement("table"));
  createTHead(tableEle, { mode, table });
  createTBody(tableEle, { mode, table, singleRow: row });

  const error = container.appendChild(document.createElement("p"));
  error.classList.add("error");

  openModal(container);
};

export const openModal = (content) => {
  const background = document
    .querySelector("body")
    .appendChild(document.createElement("dialog"));
  background.classList.add("modal-overlay");
  background.addEventListener("click", closeModal);

  const modal = background.appendChild(document.createElement("div"));
  modal.classList.add("modal-content");
  modal.addEventListener("click", (e) => e.stopPropagation());
  modal.appendChild(content);
};

export const closeModal = () => {
  document.querySelector(".modal-overlay").remove();
};
