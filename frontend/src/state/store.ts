// import {createStore, applyMiddleware } from 'redux';
// import reducers from "./reducers/index";
// import thunk from 'redux-thunk';
// export const store = createStore(
//     reducers,
//     {},
//     applyMiddleware(thunk)
// )
import authReducer from "./auth/authReducer";

import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {compose} from 'redux';


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const store = configureStore({
    reducer: {
        auth: authReducer
    },
    devTools: true,
});


export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;