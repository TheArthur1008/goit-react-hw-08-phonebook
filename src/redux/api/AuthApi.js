import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const AuthApi = createApi({
  reducerPath: 'AuthApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['User'],

  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => '/users/current',
    }),

    userSignup: builder.mutation({
      query: user => ({
        url: `/users/signup`,
        method: 'POST',
        body: user,
      }),
    }),

    userLogin: builder.mutation({
      query: user => ({
        url: `/users/login`,
        method: 'POST',
        body: user,
      }),
    }),

    userLogout: builder.mutation({
      query: () => ({
        url: `/users/logout`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useUserLoginMutation,
  useUserLogoutMutation,
  useUserSignupMutation,
} = AuthApi;
