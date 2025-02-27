import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

type PostData = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

//https://jsonplaceholder.typicode.com/posts/1

export const postApiService = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getPostsList: builder.query<PostData[], void>({
      query: () => 'posts/',
    }),
    getPosts: builder.query<PostData, string>({
      query: (id) => `posts/${id}`,
    }),
    updatePost: builder.mutation<PostData, { id: number; title?: string; body?: string }>({
      query: ({ id, ...patch }) => ({
        url: `posts/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetPostsListQuery,
  useGetPostsQuery,
  useUpdatePostMutation,
  util: { getRunningQueriesThunk },
} = postApiService;

// export endpoints for use in SSR
export const { getPosts } = postApiService.endpoints;
