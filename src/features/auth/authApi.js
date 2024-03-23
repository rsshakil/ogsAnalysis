import _ from "lodash";
import api from "../api/api";

//create product endpoints
export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        //Mutation endpoints
        login: builder.mutation({
            query: (data) => ({
                url: process.env.REACT_APP_AUTH_API_URL + '/auth/login',
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log('response data: ', data);

                    localStorage.setItem('accessToken', data?.token)
                    localStorage.setItem('csrfToken', data?.csrf)

                } catch (err) {
                    console.log("err", err)
                }
            }
        }),

    })
});

export const {
    useLoginMutation,
} = authApi;