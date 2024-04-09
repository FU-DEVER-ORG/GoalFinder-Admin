import { api } from "./base";

export const authAPI = api.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation({
        //todo addition data in need
      query: (data: {}) => ({
        //todo
        url: "",
        method: "POST",
        body: data,
        flashError: true,
      }),
      //todo add invalidatesTags if need
    }),
    //todo add more api query ....
  }),
});
