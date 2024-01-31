import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IBook, IBookResponse} from '@interfaces';
import {config} from 'config';
import {adaptBook} from 'adapters';

export const libraryBackSlice = createApi({
  reducerPath: 'libraryBack',
  baseQuery: fetchBaseQuery({
    baseUrl: config.apis.libraryBack,
    headers: {
      accept: 'application/json',
    },
  }),
  tagTypes: ['Book'],
  endpoints: builder => ({
    getBooks: builder.query<IBook[], void>({
      query: () => `/books`,
      providesTags: ['Book'],
      transformResponse: (response: IBookResponse[]) => adaptBook(response),
    }),
  }),
});

export const {useGetBooksQuery} = libraryBackSlice;
