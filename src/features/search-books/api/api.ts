import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Root } from "../types/types";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://gutendex.com" }),
  endpoints: (builder) => ({
    getBooks: builder.query<Root, string>({
      query: (search = "") => ({
        url: "/books",
        params: {
            search: search
        }
      }),
    }),
    getInfoBooks: builder.query<Root, string>({
      query: () => ({
        url: `/books`,
        params:{
          sort: "popular",
          // page_size: 3
        }
      }),
    })
  }),
});   

export const { useLazyGetBooksQuery, useGetInfoBooksQuery } = bookApi;
