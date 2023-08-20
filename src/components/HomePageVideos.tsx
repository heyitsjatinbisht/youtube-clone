import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import "../HomePageVideos.css";

interface Response {
  items: FetchVideos[];
}

interface FetchVideos {
  id: string;
  snippet: Snippet;
}

interface Snippet {
  title: string;
  description: string;
}

const HomePageVideos = () => {
  const [videos, setVideos] = useState<FetchVideos[]>([]);
  useEffect(() => {
    apiClient.get<Response>("/videos").then((res) => setVideos(res.data.items));
  }, []);

  return (
    <ul>
      {videos.map((video) => (
        <li key={video.id}>{video.snippet.title}</li>
      ))}
    </ul>
  );
};

export default HomePageVideos;
