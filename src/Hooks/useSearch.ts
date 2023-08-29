import { useQuery } from "react-query";
import APIClient from "../services/api-client";
import { Response } from "./useVideos";

const apiClient = new APIClient("/search");

const useSearch = (searchQuery: string) => {
  return useQuery<Response, Error>({
    queryKey: ["search", searchQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          part: "id,snippet",
          totalResults: 300,
          maxResults: 25,
          key: import.meta.env.VITE_REACT_APP_API_KEY,
          q: searchQuery,
        },
      }),
  });
};

export default useSearch;
