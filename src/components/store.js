import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './article-slice';


export const store = configureStore({
    reducer: {
        articles: articlesReducer
    }
})