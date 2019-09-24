import { put, call, takeEvery } from 'redux-saga/effects';
import { LOGIN } from '../types/auth.types';
// actions
import { setUserInfo } from '../actions/auth.actions';
// service
import AuthService from '../../services/auth.service';

function* login(action) {
    const { username, password, onSuccess, onError } = action.payload;
    try {
        const response = yield call([AuthService.instance, AuthService.instance.login], username, password );
        yield put(setUserInfo(response));
        onSuccess();
    } catch (e) {
        onError();
    }
}

export function* watchLogin() {
    yield takeEvery(LOGIN, login);
}