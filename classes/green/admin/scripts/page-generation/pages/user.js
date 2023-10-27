import {
  createRecord,
  deleteRecord,
  getAllRecords,
  getRoles,
  patchRecord,
} from "../../requests.js";
import {
  createCreateSection,
  createHeader,
  createTableSection,
} from "../components/sections.js";
import { capitalize } from "../utils/utils.js";

const ENTITY = "user";

const COLUMNS = [
  {
    name: "id",
    type: "number",
    editable: false,
  },
  {
    name: "username",
    type: "string",
    editable: true,
    required: true,
  },
  {
    name: "setPasswordUUID",
    type: "string",
    editable: false,
    readOnly: true,
  },
  {
    name: "roles",
    type: "list",
    editable: true,
    getData: getRoles,
    multiple: true,
    required: true,
  },
];

const REQUESTS = {
  read: () => getAllRecords(ENTITY),
  create: (data) => createRecord(ENTITY, data),
  update: (data) => patchRecord(ENTITY, data),
  delete: (id) => deleteRecord(ENTITY, id),
};

const table = {
  requests: REQUESTS,
  columns: COLUMNS,
  name: capitalize(ENTITY),
};

export const createUserPage = async (container) => {
  table.data = await table.requests.read();
  createHeader(container, table);
  createTableSection(container, table);
  createCreateSection(container, table);
};
