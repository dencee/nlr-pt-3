// export const BASE_URL = "https://green-api-production.up.railway.app/api";
export const BASE_URL = "http://localhost:8080/api";

export const getUserByUUID = async (uuid) => {
  const url = `${BASE_URL}/user/${uuid}`;
  return makeRequest(() => fetch(url));
};

export const setPassword = async (uuid, password) => {
  const url = `${BASE_URL}/user/setPassword/${uuid}`;
  return makeRequest(() =>
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    })
  );
};

export const addProject = async (jwt, data) => {
  const url = `${BASE_URL}/project`;
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

export const updateProject = async (jwt, data, id) => {
  const url = `${BASE_URL}/project/${id}`;
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

export const deleteProject = async (jwt, id) => {
  const url = `${BASE_URL}/project/${id}`;
  return makeRequest(() =>
    fetch(url, {
      method: "DELETE",
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
    if (response.headers.get("content-type") != null) {
      return await response.json();
    } else {
      return response.status;
    }
  } else {
    const body = await response?.json();
    console.log(`HTTP Response Code: ${response?.status}`);
    console.log("Response Body: ", body);
    return response.status;
  }
};
