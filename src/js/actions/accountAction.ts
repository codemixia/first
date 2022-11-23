import axios from '_utils/axios';
import * as TYPES from '_actions/actionTypes';
import { AppDispatch } from '../store';

export const fetchGroupServices = () => (dispatch: AppDispatch) => {
    dispatch({
        type: TYPES.FETCH_GROUP_SERVICES_START,
    });
    return axios.get(`/api/account/self/gs`, {}).then(res => {
        dispatch({
            type: TYPES.FETCH_GROUP_SERVICES_END,
            data: res.data,
        });
        return res;
    });
};
