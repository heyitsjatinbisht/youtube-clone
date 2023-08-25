import apiClient from "../services/api-client";
import { useInfiniteQuery } from "react-query";

interface Response {
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
    apiClient
      .get<Response>("/videos", {
        params: {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          regionCode: "IN",
          maxResults: 15,
          key: import.meta.env.VITE_REACT_APP_API_KEY,
          pageToken: pageToken,
        },
      })
      .then((res) => res.data);

  return useInfiniteQuery<Response, Error>({
    queryKey: ["videos"],
    queryFn: ({ pageParam }) => getVideos(pageParam),
    getNextPageParam: (lastPage) => {
      return lastPage.nextPageToken || undefined;
    },
  });
};

export default useVideos;
