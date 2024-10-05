import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "../../features/search-books";
import { bookReducer } from "../slices/book.slice";

export const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
    booksSlice: bookReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});
export type TypeRootState = ReturnType<typeof store.getState>;