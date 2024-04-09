import { createSlice } from "@reduxjs/toolkit"
import { authAPI } from "../services/auth";
import webStorageClient from "@/utils/webStorageClient";
import { constants } from "buffer";

export interface IAuth {
    //todo
}
const initialState: IAuth = {
    //todo
}
const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        //todo adding reducers
    },
    extraReducers: (builder) => {
        //todo
        builder
        .addMatcher(authAPI.endpoints.signIn.matchPending, () => {
            //todo do storage action when req is pending
        })
        .addMatcher(authAPI.endpoints.signIn.matchFulfilled, (state, action) => {
            //todo do storage action when req oke
        })
        .addMatcher(authAPI.endpoints.signIn.matchRejected, (state) => {
            //todo do storage action when req rejected
        });
    }
})
export const {
    //todo add reducer in need
} = slice.actions;
export default slice.reducer;
