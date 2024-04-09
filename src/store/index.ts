import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const createStore = (
  option?: ConfigureStoreOptions["preloadedState"] | undefined
) =>
  configureStore({
    reducer: {
        //todo state for adding reducer
    },
    //todo middleware in need
  });
//create redux store
export const store = createStore();
//setup dispatch listeners
setupListeners(store.dispatch);
//export store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
