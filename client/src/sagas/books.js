import { takeEvery, takeLatest, put, call, fork, take } from 'redux-saga/effects'
import * as actions from '../actions/books'
import * as api from '../api/books'


function* getBooks() {
    try {
        const result = yield call(api.getBooks)
        yield put(actions.getBooksSuccess({ bookList: result.data }))
    }
    catch (e) {
        console.log('error')
    }
}

function* watchGetBooksRequest() {
    yield takeEvery(actions.Types.GET_BOOKS_REQUEST, getBooks)
}


function* createBook(action) {
    try {
        console.log('createBook', action.payload)
        yield call(api.createBook, { bookName: action.payload.bookName, totalPages: action.payload.totalPages, currentPage: action.payload.currentPage, dateStarted: action.payload.dateStarted })
        // yield (getBooks)

    }
    catch (e) {
        console.log(e)
    }
}

function* watchCreateBookRequest() {
    yield takeLatest(actions.Types.CREATE_BOOK_REQUEST, createBook)
}

function* deleteBook({ book }) {
    try {
        yield call(api.deleteBook, book)
        yield call(getBooks)
    }
    catch (e) {
        console.log(e)
    }
}

function* watchDeleteBookRequest() {
    while (true) {
        const action = yield take(actions.Types.DELETE_BOOK_REQUEST)
        yield call(deleteBook, { book: action.payload.book })
    }
}

const booksSagas = [
    fork(watchGetBooksRequest),
    fork(watchCreateBookRequest),
    fork(watchDeleteBookRequest)
]

export default booksSagas