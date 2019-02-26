import axios from "axios";

export function getBooks() {
  return axios
    .get("http://localhost:3001/api/books")
    .then(onSuccess)
    .catch(onError);
}

export function createNewBook(data) {
  return axios
    .post("http://localhost:3001/api/books", data)
    .then(onSuccess)
    .catch(onError);
}

export function removeBook(book) {
  return axios
    .delete(`http://localhost:3001/api/books/${book._id}`)
    .then(onSuccess)
    .catch(onError);
}

export function editBook(book) {
  return axios
    .put(`http://localhost:3001/api/books/${book._id}`, book)
    .then(onSuccess)
    .catch(onError);
}

function onSuccess(response) {
  return response;
}

function onError(err) {
  return Promise.reject(err.data);
}
