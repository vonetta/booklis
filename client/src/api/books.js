import axios from "axios";
const url = "https://booklist2019.herokuapp.com";
export const getBooks = async userId => {
  try {
    const response = await axios.get(`${url}/api/books?userId=${userId}`);
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};

export const getOneBook = async book => {
  try {
    const response = await axios.get(`${url}/api/books/${book.id}`);
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};

export const createBook = async ({
  userId,
  bookName,
  totalPages,
  currentPage
}) => {
  try {
    const response = await axios.post(`${url}/api/book`, {
      userId,
      bookName,
      totalPages,
      currentPage
    });
    return onSuccess(response);
  } catch (err) {
    console.log("api error");
    return onError(err);
  }
};

export const deleteBook = async book => {
  try {
    const response = await axios.delete(`${url}/api/book/${book._id}`);
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};

export const updateBook = async ({
  _id,
  bookName,
  totalPages,
  currentPage,
  dateStarted
}) => {
  try {
    const response = await axios.put(`${url}/api/book/${_id}`, {
      _id,
      bookName,
      totalPages,
      currentPage,
      dateStarted
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
  console.log(err);
  return Promise.reject(err.data);
}
