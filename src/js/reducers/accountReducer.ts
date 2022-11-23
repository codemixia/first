import { AnyAction } from 'redux';
import * as TYPES from '_actions/actionTypes';

export const initialState = {
    groupServices: [],
};

export default function AccountReducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case TYPES.FETCH_GROUP_SERVICES_START:
            return {
                ...state,
                ...action.data,
            };
        case TYPES.FETCH_GROUP_SERVICES_END:
            return {
                ...state,
                ...action.data,
            };
    }
    return state;
}
