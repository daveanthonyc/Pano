import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = import.meta.env.VITE_REACT_BASE_URL

export const issueApi = createApi({
    reducerPath: 'issueApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getAllIssues: builder.query({
            query: () => "fact/",
        })
    })
})

export const { useGetAllIssuesQuery } = issueApi;
