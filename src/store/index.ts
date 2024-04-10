import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./services/base";
import auth from "./features/auth";

export const createStore = (
  option?: ConfigureStoreOptions["preloadedState"] | undefined
) =>
  configureStore({
    reducer: {
        //todo state for adding reducer
        [api.reducerPath]: api.reducer,
        auth,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    ...option,
  });
//create redux store
export const store = createStore();
//setup dispatch listeners
setupListeners(store.dispatch);
//export store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
