import axios from "axios";
const url = url;
export const createUser = async ({
  firstName,
  lastName,
  email,
  password,
  verified,
  dateRegistered
}) => {
  console.log(dateRegistered);
  try {
    const response = await axios.post(`${url}/api/users/`, {
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
    const response = await axios.post(`${url}/api/users/login`, {
      email,
      password
    });
    return onSuccess(response.data);
  } catch (err) {
    return onError(err);
  }
};
function onSuccess(response) {
  return response;
}

function onError(error) {
  return Promise.reject(error.data);
}
