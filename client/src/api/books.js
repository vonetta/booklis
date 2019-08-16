import axios from "axios";

export const getBooks = async () => {
  try {
    const response = await axios.get(
      `https://booklist2019.herokuapp.com/api/books`
    );
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};

export const getOneBook = async book => {
  try {
    const response = await axios.get(
      `https://booklist2019.herokuapp.com/api/book/${book.id}`
    );
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};

export const createBook = async ({
  bookName,
  totalPages,
  currentPage,
  dateStarted
}) => {
  try {
    const response = await axios.post(
      `https://booklist2019.herokuapp.com/api/book`,
      {
        bookName,
        totalPages,
        currentPage,
        dateStarted
      }
    );
    return onSuccess(response);
  } catch (err) {
    return onError(err);
  }
};

export const deleteBook = async book => {
  try {
    const response = await axios.delete(
      `https://booklist2019.herokuapp.com/api/book/${book._id}`
    );
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
    const response = await axios.put(
      `https://booklist2019.herokuapp.com/api/book/${_id}`,
      {
        _id,
        bookName,
        totalPages,
        currentPage,
        dateStarted
      }
    );
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
