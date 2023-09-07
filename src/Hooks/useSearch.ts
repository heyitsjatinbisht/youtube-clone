import APIClient from "../services/api-client";
import { Response } from "./useVideos";
import { useInfiniteQuery } from "react-query";

const apiClient = new APIClient("/search");

const useSearch = (searchQuery: string) => {
  return useInfiniteQuery<Response, Error>({
    queryKey: ["search", searchQuery],
    queryFn: (pageParam) =>
      apiClient.getAll({
        params: {
          part: "id,snippet",
          totalResults: 300,
          maxResults: 25,
          key: import.meta.env.VITE_REACT_APP_API_KEY,
          q: searchQuery,
          pageToken: pageParam,
        },
      }),
    getNextPageParam: (lastPage) => {
      return lastPage.nextPageToken || undefined;
    },
  });
};

export default useSearch;
