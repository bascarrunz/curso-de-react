import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import productReducer from './features/product/productSlice';
import formReducer from './features/forms/formSlice.js';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer,
        loginFormData: formReducer,
    },
});

export default store;
