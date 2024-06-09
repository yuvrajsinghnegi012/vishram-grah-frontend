import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const server = import.meta.env.VITE_SERVER_URL;

export const userApi = createApi({
    reducerPath: "user",
    baseQuery: fetchBaseQuery({ 
        baseUrl: `${server}/api/v1/user/`,
    }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (formData) =>({
                url: 'new',
                method: 'POST',
                body: formData,
            }),
        }),
        login: builder.mutation({
            query: (formData) =>({
                url: "login",
                method: "POST",
                body: formData,
            })
        }),
        singleUser: builder.query({
            query: (id) => `${id}`,
        }),
        toggleWishlistProperty: builder.mutation({
            query: ({userId, propertyId})=>({
                url: `wishlist/${userId}/${propertyId}`,
                method: `POST`,
            }),
        }),
        getWishlist: builder.query({
            query: (userId) => `wishlist/${userId}`,
        }),
        logout: builder.mutation({
            query: ()=>({
                url: "logout",
                method: 'POST',
            }),
        }),
    }),
});

export const { useSingleUserQuery, useSignUpMutation, useLoginMutation, useToggleWishlistPropertyMutation, useGetWishlistQuery, useLogoutMutation } = userApi;