'use client'
import { api } from "./base";

export const authAPI = api.injectEndpoints({
  endpoints: (build) => ({

    signIn: build.mutation({
        //todo addition data in need
      query: (data: {email:string, password:string}) => ({
        //todo
        url: "https://demo/endpoint",
        method: "POST",
        body: data,
        flashError: true,
      }),
      //todo add invalidatesTags if need
    }),
    //todo add more api query ....
  }),
});

export const {
  useSignInMutation
  //todo addition in need
} = authAPI;
