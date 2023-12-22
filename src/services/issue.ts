import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = import.meta.env.VITE_REACT_BASE_URL

export const issueApi = createApi({
    reducerPath: 'issueApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getAllIssuesByUserId: builder.query({
            query: (userId) => ({
                url: `/issue/find`,
                method: 'POST',
                body: {
                    id: userId
                }
            }),
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
        createIssue: builder.mutation({
            query: (newIssue) => ({
                url: '/issue/create',
                method: 'POST',
                body: {
                    title: "New Issue",
                    projectTitle: "test",
                    state: "Backlog",
                    priorityLevel: "high",
                    startDate: "2023-12-11T02:49:36.510+00:00",
                    dueDate: "2023-12-11T02:49:36.510+00:00",
                    userId: "6571e41942604646e4ab720a",
                    project: "657676b9ed333328f1bea5b8",
                    description: "test",
                    users: [],
                    issues: [],
                    creationDate: "2023-12-10T23:41:22.459+00:00"
                },
            })
        }),
    })
})

export const { 
    useGetUserByEmailPasswordQuery,
    useGetAllProjectsQuery,
    useCreateProjectMutation,
    useGetUserByNameQuery,
    useGetProjectsByIdsQuery,
    useCreateUserMutation,
    useGetAllIssuesByUserIdQuery
} = issueApi;
