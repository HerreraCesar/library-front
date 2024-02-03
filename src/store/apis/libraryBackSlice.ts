import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IBook, IBookPayload, IBookResponse} from '@interfaces';
import {config} from 'config';
import {adaptBook, adaptBooks} from 'adapters';

export const libraryBackSlice = createApi({
  reducerPath: 'libraryBack',
  baseQuery: fetchBaseQuery({
    baseUrl: config.apis.libraryBack,
    headers: {
      accept: 'application/json',
    },
  }),
  tagTypes: ['Books', 'Book'],
  endpoints: builder => ({
    getBooks: builder.query<IBook[], void>({
      query: () => `/books`,
      providesTags: ['Books'],
      transformResponse: (response: IBookResponse[]) => adaptBooks(response),
    }),
    getBookById: builder.query<IBook, String>({
      query: id => `/books/${id}`,
      providesTags: ['Book'],
      transformResponse: (response: IBookResponse[]) => adaptBook(response),
    }),
    addBook: builder.mutation<String, Partial<IBookPayload>>({
      query: body => {
        return {
          url: `/books`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Books'],
    }),
    updateBook: builder.mutation<
      String,
      {id: string; body: Partial<IBookPayload>}
    >({
      query: ({body, id}) => {
        return {
          url: `/books/${id}`,
          method: 'PUT',
          body,
        };
      },
      invalidatesTags: ['Books', 'Book'],
    }),
    deleteBook: builder.mutation<String, Partial<String>>({
      query: id => {
        return {
          url: `/books/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Books'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
} = libraryBackSlice;
