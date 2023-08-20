import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Response {
  items: FetchVideos[];
}

interface FetchVideos {
  id: string;
  snippet: Snippet;
}

export interface Snippet {
  title: string;
  description: string;
  thumbnails: Thumbnail;
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

const useVideos = () => {
  const [videos, setVideos] = useState<FetchVideos[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<Response>("/videos")
      .then((res) => setVideos(res.data.items))
      .catch((err) => setError(err.message));
  }, []);

  return { videos, error };
};

export default useVideos;
