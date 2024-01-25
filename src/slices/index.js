import { configureStore } from "@reduxjs/toolkit";
import { articlesReducer } from "./article";
import { deleteModalReducer } from "./deleteModal";

const store = configureStore({
    reducer: {
        articles: articlesReducer,
        deleteModal: deleteModalReducer
    }
})

export {store}