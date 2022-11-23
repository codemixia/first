import { combineReducers } from 'redux';
import account from '_reducers/accountReducer';

const reducer = combineReducers({
    account,
});
export default reducer;
