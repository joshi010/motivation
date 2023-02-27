import { createSlice } from "@reduxjs/toolkit";
import { articles } from "./landingArt";


export const articleSlice = createSlice({
    name: 'articles',
    initialState: {
        articles: articles,
    },
    reducers: {}
});

export const selectArticles = (state) => state.articles.articles;
export const filterArticles = (query, articles) => Object.values(articles).filter(article => article.title.toLowerCase().includes(query.toLowerCase()));
export default articleSlice.reducer;