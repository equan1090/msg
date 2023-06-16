// import {createStore, applyMiddleware } from 'redux';
// import reducers from "./reducers/index";
// import thunk from 'redux-thunk';
// export const store = createStore(
//     reducers,
//     {},
//     applyMiddleware(thunk)
// )
import authReducer from "./auth/authReducer";

import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';


const store = configureStore({
    reducer: {
        auth: authReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;