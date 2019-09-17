import axios from "axios";

// const url = "https://booklist2019.herokuapp.com";
// const url = "http://localhost:3001";

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${process.env.DEV}/api/users`);
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};

export const getCurrentUser = async token => {
  try {
    const response = await axios.get(
      `${process.env.DEV}/api/currentUser?userId=${token}`
    );
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};

export const createUser = async ({ firstName, lastName, email, password }) => {
  try {
    const response = await axios.post(`${process.env.DEV}/api/account/signup`, {
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
    const response = await axios.post(`${process.env.DEV}/api/account/signin`, {
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
      `${process.env.DEV}/api/account/verify?token=${token}`
    );
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};

export const logoutUser = async ({ token }) => {
  try {
    const response = await axios.get(
      `${process.env.DEV}/api/account/logout?token=${token}`
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
