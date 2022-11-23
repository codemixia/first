import { useEffect } from 'react';
import { fetchGroupServices } from '_actions/accountAction';
import { useAppDispatch, useAppSelector } from '_utils/reduxHooks';

const App = () => {
    const { groupServices } = useAppSelector(state => state.account);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchGroupServices());
    }, [dispatch]);

    return (
        <div>
            <h1 className="title">Hello World</h1>
        </div>
    );
};
export default App;
