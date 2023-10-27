export const BASE_URL = "http://localhost:8080/api";
const USERNAME = "admin";
const PASSWORD = "sausages";
export let jwt;

export const login = async () => {
  const loginDto = { username: USERNAME, password: PASSWORD };
  const json = await makeRequest(() =>
    fetch(`${BASE_URL}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDto),
    })
  );

  jwt = json.accessToken;
};

export const getAllRecords = async (entity) => {
  const url = `${BASE_URL}/${entity}`;
  return makeRequest(() =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
  );
};

export const createRecord = async (entity, data) => {
  const url = `${BASE_URL}/${entity}`;
  return makeRequest(() =>
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  );
};

export const patchRecord = async (entity, data) => {
  const url = `${BASE_URL}/${entity}/${data.id}`;
  return makeRequest(() =>
    fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  );
};

export const updateRecord = async (entity, data) => {
  const url = `${BASE_URL}/${entity}/${data.id}`;
  return makeRequest(() =>
    fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  );
};

export const deleteRecord = async (entity, id) => {
  const url = `${BASE_URL}/${entity}/${id}`;
  return makeRequest(() =>
    fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
  );
};

// user specific
export const getRoles = async () => {
  const url = `${BASE_URL}/user/roles`;
  return makeRequest(() =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
  );
};

//project specific
export const getStudentRecords = async () => {
  const url = `${BASE_URL}/user?student=true`;
  return makeRequest(() =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
  );
};

export const makeRequest = async (request) => {
  let response;
  try {
    response = await request();
  } catch (error) {
    console.log("Fetch Error: ", error);
  }

  if (response?.ok) {
    if (response.status === 204) return "No content";

    return await response.json();
  } else {
    const body = await response?.json();
    console.log(`HTTP Response Code: ${response?.status}`);
    console.log("Response Body: ", body);
  }
};
