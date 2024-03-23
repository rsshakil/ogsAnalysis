import _ from "lodash";
import api from "../api/api";

//create gacha endpoints
export const gachaApi = api.injectEndpoints({
    endpoints: (builder) => ({
        //Mutation endpoints
        updateGacha: builder.mutation({
            query: ({ gachaId, data }) => ({
                url: `/manager/gacha/${gachaId}`,
                method: "PUT",
                body: data
            }),
        }),
    })
});

export const {
    useUpdateGachaMutation,
} = gachaApi;