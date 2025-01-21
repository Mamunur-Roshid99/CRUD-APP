import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

const initialBooks = {
  books: [
    { id: uuidv4(), title: "Love Bangladesh", author: "Mamun" },
    { id: uuidv4(), title: "The Alchemist", author: "Paulo Coelho" },
  ],
};

export const booksSilce = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const {id, title, author} = action.payload;
      const bookExict = state.books.filter((book) => book.id === id);
      if (bookExict) {
        bookExict[0].title = title;
        bookExict[0].author = author;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } = booksSilce.actions;
export default booksSilce.reducer;
