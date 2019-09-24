import { SHOW_LOADING, HIDE_LOADING } from '../types/loading.types';

export const showLoading = (message) => ({
    type: SHOW_LOADING,
    payload: { message }
});

export const hideLoading = () => ({
    type: HIDE_LOADING
});