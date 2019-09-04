import axios from "axios";

// const url = "https://booklist2019.herokuapp.com";
const url = "http://localhost:3001";

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${url}/api/users`);
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await axios.get(`${url}/api/user`);
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};

export const createUser = async ({
  firstName,
  lastName,
  email,
  password,
  verified,
  dateRegistered
}) => {
  try {
    const response = await axios.post(`${url}/api/user`, {
      firstName,
      lastName,
      email,
      password,
      verified,
      dateRegistered
    });
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post(`${url}/api/user/login`, {
      email,
      password
    });

    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};
function onSuccess(response) {
  console.log(response);
  return response;
}

function onError(error) {
  return Promise.reject(error.data);
}
