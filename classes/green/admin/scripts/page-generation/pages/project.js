import {
  createRecord,
  deleteRecord,
  getAllRecords,
  getStudentRecords,
  updateRecord,
} from "../../requests.js";
import {
  createCreateSection,
  createHeader,
  createTableSection,
} from "../components/sections.js";
import { capitalize } from "../utils/utils.js";

const ENTITY = "project";

const COLUMNS = [
  {
    name: "id",
    type: "number",
    editable: false,
  },
  {
    name: "student",
    type: "student",
    getData: async () => {
      const data = await getStudentRecords();
      return data.map((u) => [u.id, u.username]);
    },
    displayPath: (value) => value.user?.username,
    editable: true,
    required: true,
  },
  {
    name: "url",
    type: "string",
    editable: true,
    required: true,
  },
  {
    name: "name",
    type: "string",
    editable: true,
    required: false,
  },
  {
    name: "description",
    type: "string",
    editable: true,
    required: false,
  },
];

const REQUESTS = {
  read: () => getAllRecords(ENTITY),
  create: (data) => createRecord(ENTITY, data),
  update: (data) => updateRecord(ENTITY, data),
  delete: (id) => deleteRecord(ENTITY, id),
};

const table = {
  requests: REQUESTS,
  columns: COLUMNS,
  name: capitalize(ENTITY),
};

export const createProjectPage = async (container) => {
  table.data = await table.requests.read();
  createHeader(container, table);

  if (table.data.length === 0) {
    const p = container.appendChild(document.createElement("p"));
    p.textContent = "No records exist.";
  } else {
    createTableSection(container, table);
  }

  createCreateSection(container, table);
};
