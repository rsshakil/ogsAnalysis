import api from "../api/api";

//create product endpoints
export const shippingApi = api.injectEndpoints({
    overrideExisting: true, // Specify this option to override the existing endpoint
    endpoints: (builder) => ({
        //Mutation endpoints
        updateShipping: builder.mutation({
            query: ({ userCollectionId, data }) => ({
                url: `/manager/shipping/${userCollectionId}`,
                method: "PUT",
                body: data
            }),
        })
    })
});

export const {
    useUpdateShippingMutation,
} = shippingApi;