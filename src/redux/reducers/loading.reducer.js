import { SHOW_LOADING, HIDE_LOADING } from '../types/loading.types';

const INITIAL_STATE = {
    loading: false,
    message: '',
};

const loading = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case SHOW_LOADING:
          return {
            loading: true,
            message: payload.message
          };
        case HIDE_LOADING:
          return INITIAL_STATE;
        default:
          return state
      }
}

export default loading;