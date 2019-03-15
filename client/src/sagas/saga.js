
import { takeLatest, put, all, call } from 'redux-saga/effects'
console.log('saga file')

// function* submitForm(data) {
//     console.log('inside submit')
//     const json = yield call(fetch, "http://localhost:3001/api/books", {
//         method: 'POST',
//         body: JSON.stringify(data)
//     })

//     yield put({ type: 'SUBMIT_FORM', value: data })
// }

function* inputChange(e) {
    yield put({ type: 'HANDLE_CHANGE', value: e })
}

function* dateChange(date) {
    yield put({ type: 'DATE_CHANGE', value: date })
}

function* getAllBooks() {
    console.log('inside getAllBooks')
    const json = yield fetch('http://localhost:3001/api/books')
        .then(response => response.json())
        .then(data => data)
    yield put({ type: 'BOOKS_RECIEVED', value: json })
}

function* watchGetBooks() {
    // console.log('inside watch', getAllBooks)
    yield takeLatest('GET_BOOKS', getAllBooks)
}

export default function* rootSaga() {
    yield all([
        watchGetBooks(),
        getAllBooks(),
        submitForm(),
        inputChange(),
        // dateChange(date)

    ]);
}