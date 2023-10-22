export const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const addTypeClass = (ele, type) => {
  if (["string", "list"].includes(type)) {
    ele.classList.add("type-string");
  } else if (type === "number") {
    ele.classList.add("type-number");
  }
};

export const formatValue = (value, column) => {
  if (isArray(value)) {
    return value.map((v) => v.name).join(", ");
  } else if (isObject(value)) {
    return column.displayPath(value);
  } else {
    return value;
  }
};

const isArray = (value) => {
  return Array.isArray(value);
};

const isObject = (value) => {
  const type = typeof value;
  return type === "function" || (type === "object" && !!value);
};
