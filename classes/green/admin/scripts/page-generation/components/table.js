import { addTypeClass, formatValue } from "../utils/utils.js";
import { createDeleteConfirm, createModifyForm } from "./modal.js";

export const createTable = (container, table) => {
  const tableEle = container.appendChild(document.createElement("table"));
  tableEle.classList.add("data-table");
  createTHead(tableEle, { mode: "read", table });
  createTBody(tableEle, { mode: "read", table });
};

export const createTHead = (tableEle, { mode, table }) => {
  const thead = tableEle.createTHead();
  const tr = thead.insertRow();
  table.columns.forEach((column) => {
    if (["read", "update"].includes(mode) && column.writeOnly) return;

    const th = tr.appendChild(document.createElement("th"));
    th.textContent = column.name;
    addTypeClass(th, column.type);
  });
  tr.appendChild(document.createElement("th")); // extra for buttons
};

export const createTBody = (tableEle, { mode, table, singleRow }) => {
  const tbody = tableEle.createTBody();

  if (mode === "read") {
    table.data.forEach((row) => {
      createTR(tbody, { mode, data: row, table });
    });
  } else {
    createTR(tbody, { mode, data: singleRow, table });
  }
};

const createTR = (tbody, { mode, data, table }) => {
  const tr = tbody.insertRow();
  table.columns.forEach((column) => {
    createTD(tr, mode, column, data?.[column.name]);
  });

  createModifyButtons(tr, { mode, data, table });
};

const createModifyButtons = (tr, { mode, data, table }) => {
  if (mode === "read") {
    const modifyTd = tr.appendChild(document.createElement("td")); // extra for buttons

    const editButton = modifyTd.appendChild(document.createElement("button"));
    editButton.classList.add("edit-button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () =>
      createModifyForm("update", table, data)
    );

    if (table.columns.find((p) => p.name === "id").notDeletable) return;

    const deleteButton = modifyTd.appendChild(document.createElement("button"));
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () =>
      createDeleteConfirm(table, data.id)
    );
  } else if (mode === "create") {
    const modifyTd = tr.appendChild(document.createElement("td")); // extra for buttons

    const createButton = modifyTd.appendChild(document.createElement("button"));
    createButton.classList.add("create-button");
    createButton.textContent = "Create";
    createButton.type = "submit";
  } else if (mode === "update") {
    const modifyTd = tr.appendChild(document.createElement("td")); // extra for buttons

    const updateButton = modifyTd.appendChild(document.createElement("button"));
    updateButton.classList.add("update-button");
    updateButton.textContent = "Update";
    updateButton.type = "submit";
  }
};

const createTD = (tr, mode, column, value) => {
  if (["read", "update"].includes(mode) && column.writeOnly) return;

  const td = tr.appendChild(document.createElement("td"));
  if (mode === "read") {
    td.textContent = formatValue(value, column);
  } else if (column.editable) {
    createInput(td, column, value);
  } else if (!column.editable) {
    if (mode === "create") {
      td.textContent = "?";
    } else if (column.readOnly) {
      td.textContent = formatValue(value, column);
    } else {
      td.textContent = formatValue(value, column);
      const hidden = td.appendChild(document.createElement("input"));
      hidden.type = "hidden";
      hidden.value = value;
      hidden.name = column.name;
    }
  }
  addTypeClass(td, column.type);
};

const createInput = async (td, column, value) => {
  if (column.type === "list") {
    const data = await column.getData();
    const select = td.appendChild(document.createElement("select"));
    select.name = column.name;
    select.required = column.required ?? false;
    if (column.multiple) {
      select.multiple = true;
      select.size = data.length;
    }
    data.forEach((d) => {
      const option = select.appendChild(document.createElement("option"));
      option.value = d;
      option.textContent = d;
      if (value)
        option.selected = value.some((v) => v.name.toLowerCase().includes(d));
    });
  } else if (column.type === "student") {
    const data = await column.getData();
    const select = td.appendChild(document.createElement("select"));
    select.required = column.required ?? false;
    select.name = column.name;
    const promptOption = select.appendChild(document.createElement("option"));
    promptOption.textContent = "Select...";
    promptOption.value = "";
    promptOption.selected = true;
    promptOption.disabled = "disabled";
    data.forEach(([id, name]) => {
      const option = select.appendChild(document.createElement("option"));
      option.value = id;
      option.textContent = name;
      if (value) option.selected = name === column.displayPath(value);
    });
  } else {
    const input = td.appendChild(document.createElement("input"));
    input.value = value ?? "";
    input.name = column.name;
    input.required = column.required ?? false;
  }
};
