import axios from "axios";

export const getBooks = async () => {
    try {
        const response = await axios
            .get("http://localhost:3001/api/books");
        return onSuccess(response);
    }
    catch (err) {
        return onError(err);
    }
}



export const createBook = async ({ bookName, totalPages, currentPage, dateStarted }) => {
    // console.log('axios', bookName, totalPages, currentPages, dateStarted)
    console.log(bookName)
    try {
        const response = await axios
            .post("http://localhost:3001/api/books", {
                bookName, totalPages, currentPage, dateStarted
            });
        return onSuccess(response);
    }
    catch (err) {
        return onError(err);
    }
}


export const deleteBook = async (book) => {
    try {
        console.log(book)
        const response = await axios
            .delete(`http://localhost:3001/api/books/${book._id}`)
        return onSuccess(response)
    }
    catch (e) {
        console.log(e)
    }
}
// export function removeBook(book) {
//     return axios
//         .delete(`http://localhost:3001/api/books/${book._id}`)
//         .then(onSuccess)
//         .catch(onError);
// }

// export function editBook(book) {
//     return axios
//         .put(`http://localhost:3001/api/books/${book._id}`, book)
//         .then(onSuccess)
//         .catch(onError);
// }

function onSuccess(response) {
    return response;
}

function onError(err) {
    return Promise.reject(err.data);
}
