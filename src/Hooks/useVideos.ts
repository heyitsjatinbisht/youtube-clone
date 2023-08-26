import APIClient from "../services/api-client";
import { useInfiniteQuery } from "react-query";

const apiClient = new APIClient("/videos");

export interface Response {
  items: FetchVideos[];
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: PageInfo;
}
interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

interface FetchVideos {
  id: string;
  snippet: Snippet;
  statistics: Statistics;
  channelId: string;
}

export interface Snippet {
  title: string;
  description: string;
  thumbnails: Thumbnail;
  channelTitle: string;
  publishedAt: string;
}

interface Thumbnail {
  default: ThumbnailSize;
  medium: ThumbnailSize;
  high: ThumbnailSize;
  maxres?: ThumbnailSize;
}
interface ThumbnailSize {
  url: string;
  width: number;
  height: number;
}
export interface Statistics {
  viewCount: number;
}

const useVideos = () => {
  const getVideos = (pageToken: string) =>
    apiClient.getAll<Response>({
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 15,
        key: import.meta.env.VITE_REACT_APP_API_KEY,
        pageToken: pageToken,
      },
    });

  return useInfiniteQuery<Response, Error>({
    queryKey: ["videos"],
    queryFn: ({ pageParam }) => getVideos(pageParam),
    getNextPageParam: (lastPage) => {
      return lastPage.nextPageToken || undefined;
    },
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useVideos;
