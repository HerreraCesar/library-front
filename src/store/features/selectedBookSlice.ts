import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {IBook} from 'interfaces';

interface SelectedBookState {
  book: IBook | undefined;
}

const initialState: SelectedBookState = {
  book: undefined,
};

export const selectedBookSlice = createSlice({
  name: 'selectedBook',
  initialState,
  reducers: {
    setSelectedBook: (state, action: PayloadAction<IBook>) => {
      state.book = action.payload;
    },
  },
});

export const {setSelectedBook} = selectedBookSlice.actions;

export default selectedBookSlice.reducer;
