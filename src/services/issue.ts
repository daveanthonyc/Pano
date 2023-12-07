import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = import.meta.env.VITE_REACT_BASE_URL

export const issueApi = createApi({
    reducerPath: 'issueApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getAllIssues: builder.query({
            query: () => "/",
        }),
        getUserById: builder.query({
            query: (id) => `/general/user/${id}`
        }),
        createUser: builder.mutation({
            query: (newUser) => ({
                url: '/general/user',
                method: 'POST',
                body: newUser,
            })
        })
    })
})

export const { 
    useGetAllIssuesQuery,
    useGetUserByIdQuery,
} = issueApi;
