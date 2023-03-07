import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './article-slice';
import plansReducer from './plans/components/plan-slice';


export const store = configureStore({
    reducer: {
        articles: articlesReducer,
        plans: plansReducer,
    }
})