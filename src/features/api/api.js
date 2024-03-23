import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { userLoggedOut } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: async (headers, { getState, endpoint }) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

//create api slice
const api = createApi({
    reducerPath: "api",
    baseQuery: async (args, api, extraOptions) => {
        let result = await baseQuery(args, api, extraOptions);
        // if (result?.error?.status == 401) {
        //     api.dispatch(userLoggedOut());
        // }
        return result;
    },
    extractRehydrationInfo(action, { reducerPath }) {

    },
    tagTypes: [
        "ManagerItems",
        "ManagerItem",
        "ManagerItemInit",
    ],
    endpoints: (builder) => ({}),
})

export default api;