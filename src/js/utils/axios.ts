import axios from 'axios';
import failCallback from '_utils/failCallback';
import URLS from '_constants/urls';

axios.defaults.baseURL = URLS.API;
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
    response => response,
    error => {
        if (error.config.skipIntercept) {
            return Promise.reject(error);
        }
        failCallback(error);
        return Promise.reject(error);
    },
);

export default axios;
