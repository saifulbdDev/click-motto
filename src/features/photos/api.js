import { apiSlice } from '@/features/apiSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({   
    getDataList: builder.query({
      query: (payload) => {
        let url = payload === "Videos" ? 'videos/search?query=nature&per_page=15' : `search?query=${payload?.toLowerCase()}&per_page=20`
        return {
          url: url,
          method: "GET"
        };
      }
    }),
  
  
  })
});

export const {
  useGetDataListQuery,
} = authApi;