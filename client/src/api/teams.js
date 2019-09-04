import axios from "axios";
const url = "https://booklist2019.herokuapp.com";

export const getTeams = async () => {
  try {
    const response = await axios.get(`${url}/api/teams`);
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};

export const createTeam = async ({
  teamName,
  members: { playerName, email }
}) => {
  try {
    const response = await axios.post(`${url}/api/team`, {
      teamName,
      members: { playerName, email }
    });
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};

function onSuccess(response) {
  return response;
}

function onError(err) {
  return Promise.reject(err.data);
}
