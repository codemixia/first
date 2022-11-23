import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '_components/App';

import store from './store';

import '../scss/index.scss';

const root = createRoot(document.getElementById('app') as HTMLElement);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    </Provider>,
);
