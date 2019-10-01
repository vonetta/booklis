import axios from "axios";

const url = "https://booklist2019.herokuapp.com";

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${url}/api/users`);
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};

export const getCurrentUser = async token => {
  try {
    const response = await axios.get(`${url}/api/currentUser?userId=${token}`);
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};

export const createUser = async ({ firstName, lastName, email, password }) => {
  try {
    const response = await axios.post(`${url}/api/account/signup`, {
      firstName,
      lastName,
      email,
      password
    });
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post(`${url}/api/account/signin`, {
      email,
      password
    });

    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};

export const verifyUser = async ({ token }) => {
  try {
    const response = await axios.get(
      `${url}/api/account/verify?token=${token}`
    );
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};

export const logoutUser = async ({ token }) => {
  try {
    const response = await axios.get(
      `${url}/api/account/logout?token=${token}`
    );
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};
function onSuccess(response) {
  return response.data;
}

function onError(error) {
  return Promise.reject(error.data);
}
