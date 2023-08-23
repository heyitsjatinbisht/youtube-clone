import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Response {
  items: FetchVideos[];
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
  const [videos, setVideos] = useState<FetchVideos[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    apiClient
      .get<Response>("/videos", {
        params: {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          regionCode: "IN",
          maxResults: 15,
          key: import.meta.env.VITE_REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        setVideos(res.data.items);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { videos, error, isLoading };
};

export default useVideos;
