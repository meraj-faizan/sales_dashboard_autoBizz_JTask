import { baseApi } from "@/redux/api/baseApi";
import { ISalesQuery, SalesResponse, TokenResponse } from "./sales.interface";

export const salesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAuthorizationToken: builder.mutation<
      TokenResponse,
      { tokenType: string }
    >({
      query: (body) => ({
        url: "/getAuthorize",
        method: "POST",
        body: { tokenType: body.tokenType || "frontEndTest" },
      }),
    }),
    getSalesData: builder.query<SalesResponse, ISalesQuery>({
      query: (params) => {
        return {
          url: `/sales`,
          method: "GET",
          params: params,
        };
      },
      providesTags: () => [{ type: "sales", id: "LIST" }],
    }),
  }),
});

export const { useGetAuthorizationTokenMutation, useGetSalesDataQuery } =
  salesApi;
