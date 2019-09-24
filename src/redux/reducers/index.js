import { combineReducers } from 'redux';

import auth from './auth.reducer';
import user from './user.reducer';
import loading from './loading.reducer';

const reducers = combineReducers({
    auth,
    user,
    loading,
});

export default reducers;