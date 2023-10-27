import {
  createRecord,
  deleteRecord,
  getAllRecords,
  updateRecord,
} from "../../requests.js";
import { createHeader, createTableSection } from "../components/sections.js";
import { capitalize } from "../utils/utils.js";

const ENTITY = "student";

const COLUMNS = [
  {
    name: "id",
    type: "number",
    editable: false,
    notDeletable: true,
  },
  {
    name: "user",
    type: "user",
    displayPath: (value) => value?.username,
    editable: false,
    readOnly: true,
  },
  {
    name: "fanPageUrl",
    type: "string",
    editable: true,
    required: false,
  },
  {
    name: "fanPageTitle",
    type: "string",
    editable: true,
    required: false,
  },
  {
    name: "fanPageDescription",
    type: "string",
    editable: true,
    required: false,
  },
  {
    name: "githubUrl",
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

export const createStudentPage = async (container) => {
  table.data = await table.requests.read();
  createHeader(container, table);
  createTableSection(container, table);
};
