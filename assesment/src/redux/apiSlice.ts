import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://a2sv-backend.onrender.com/api' }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => '/blogs',
    }),
    getSingleBlog: builder.query({
      query: (id) => `/blogs/${id}`,
    }),
    getMyBlogs: builder.query({
      query: () => '/blogs/my-blogs',
    }),
    createBlog: builder.mutation({
      query: (newBlog) => ({
        url: '/blogs',
        method: 'POST',
        body: newBlog,
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetBlogsQuery,
  useGetSingleBlogQuery,
  useGetMyBlogsQuery,
  useCreateBlogMutation,
} = apiSlice;
