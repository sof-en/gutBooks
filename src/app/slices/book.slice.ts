import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    booksData: [],
    saveBooksData: []
}
export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        setBooksData: (state, action) => {
            state.booksData = action.payload
            console.log(state.booksData)
        },
        setSaveBooksData: (state, action) => {
            state.saveBooksData = action.payload
        }
    }
})

export const bookActions = bookSlice.actions
export const bookReducer = bookSlice.reducer