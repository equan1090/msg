import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const url:string = 'http://localhost:8080/api'

interface User {
    emailAddress: string;
    password: string;
}

const baseQuery = fetchBaseQuery ({
    baseUrl: url,
    prepareHeaders: (headers, {getState}) => {
        headers.set("Access-Control-Allow-Origin", 'http://localhost:3000');
        return headers;
    }
})


export const messengerApi = createApi({
    reducerPath: "messengerApi",
    baseQuery: fetchBaseQuery({baseUrl: url}),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (user) => ({
                url: '/users/login',
                method: 'POST',
                body: user
            }),
        }),
        authenticate: builder.query<User, void>({
            query: (User) => "/users/authenticate"
        })
    })
})

export const {useLoginMutation, useAuthenticateQuery} = messengerApi;