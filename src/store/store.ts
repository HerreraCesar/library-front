import {configureStore} from '@reduxjs/toolkit';
import {libraryBackSlice} from './apis/libraryBackSlice';
import {selectedBookSlice} from './features/selectedBookSlice';
import {selectedSectionSlice} from './features/selectedSectionSlice';

export const store = configureStore({
  reducer: {
    selectedBook: selectedBookSlice.reducer,
    selectedSection: selectedSectionSlice.reducer,
    [libraryBackSlice.reducerPath]: libraryBackSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(libraryBackSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
