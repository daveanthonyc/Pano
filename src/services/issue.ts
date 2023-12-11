import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = import.meta.env.VITE_REACT_BASE_URL

export const issueApi = createApi({
    reducerPath: 'issueApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getAllIssues: builder.query({
            query: () => "/",
        }),
        getAllProjects: builder.query({
            query: () => "/project",
        }),
        getProjectsByIds: builder.query({
            query: (projectIds) => ({
                url: `/project/projects`,
                method: 'POST',
                body: {ids: projectIds},
            }),
        }),
        getUserByEmailPassword: builder.query({
            query: (targetUser) => ({
                url: `/general/user`,
                method: 'GET',
                body: targetUser,
            })
        }),
        getUserByName: builder.query({
            query: (targetName) => ({
                url: `/general/user/${targetName}`,
                method: 'GET',
            })
        }),
        createUser: builder.mutation({
            query: (newUser) => ({
                url: '/general/user',
                method: 'POST',
                body: newUser,
            })
        }),
        createProject: builder.mutation({
            query: (newProject) => ({
                url: '/project',
                method: 'POST',
                body: newProject,
            })
        }),
    })
})

export const { 
    useGetAllIssuesQuery,
    useGetUserByEmailPasswordQuery,
    useGetAllProjectsQuery,
    useCreateProjectMutation,
    useGetUserByNameQuery,
    useGetProjectsByIdsQuery
} = issueApi;
