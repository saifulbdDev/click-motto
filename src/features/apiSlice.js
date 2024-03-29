/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import Cookies from 'js-cookie';

const baseQuery = fetchBaseQuery({
  mode: "cors",
  baseUrl: import.meta.env.VITE_APP_API,
  prepareHeaders: async (headers, { getState, endpoint }) => {
    headers.set("Content-Type", "application/json");

    headers.set("Authorization", `${import.meta.env.VITE_API_KEY}`);

    return headers;
  }
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    // console.log(result?.error?.data.error
    //   , 'result?.error >>>')
    if (result?.error?.status === 401) {
      // api.dispatch(logout());
      // localStorage.clear();
    }
    return result;
  },
  endpoints: (builder) => ({})
});
