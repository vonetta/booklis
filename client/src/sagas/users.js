import { takeEvery, takeLatest, call, fork } from 'redux-saga/effects';
import * as actions from '../actions/users'
import * as api from '../api/users'


function* createUser(action) {
    try {
        yield call(api.createUser, { firstName: action.payload.firstName, lastName: action.payload.lastName, email: action.payload.email, password: action.payload.password, verified: action.payload.verified })
    }
    catch (e) {
        console.log(e)
    }
}

function* watchCreateUserRequest() {
    yield takeLatest(actions.Types.CREATE_USERS_REQUEST, createUser)
}

const UsersSagas = [
    fork(watchCreateUserRequest)
]


export default UsersSagas