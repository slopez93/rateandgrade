import { put, call, fork, takeEvery } from 'redux-saga/effects';
import { LOGIN } from '../types/auth.types';
// actions
import { setUserInfo, setToken } from '../actions/auth.actions';
// service
import { fakeLogin } from '../../services/fake.api';
import AuthService from '../../services/auth.service';

function* login(action) {
    console.log(action);
    const { username, password, onSuccess, onError } = action.payload;
    try {
        // const response = yield call([AuthService.instance, AuthService.instance.login], username, password );
        const response = yield call(fakeLogin);
        console.log(response);
        onSuccess();
        yield put(setUserInfo(response));
    } catch (e) {
        console.log(e);
        onError();
    }
}

export function* watchLogin() {
    yield takeEvery(LOGIN, login);
}