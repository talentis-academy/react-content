import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes: ['Post'],
  endpoints: b => ({
    getUsers: b.query({ query: () => '/users' }),
    getUserById: b.query({ query: id => `/users/${id}` }),
    getUserPosts: b.query({ query: uid => `/users/${uid}/posts`, providesTags: ['Post'] }),
    createPost: b.mutation({ query: body => ({ url: '/posts', method: 'POST', body }), invalidatesTags: ['Post'] }),
  }),
});
export const { useGetUsersQuery, useGetUserByIdQuery, useGetUserPostsQuery, useCreatePostMutation } = api;
