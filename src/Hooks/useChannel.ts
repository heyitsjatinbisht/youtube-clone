import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface ChannelResponse {
  items: FetchChannel[];
}
export interface FetchChannel {
  snippet: ChannelSnippet;
  id: string;
}
interface ChannelSnippet {
  thumbnails: ChannelThumbnail;
}

interface ChannelThumbnail {
  default: ChannelThumbnailSize;
  medium: ChannelThumbnailSize;
}
interface ChannelThumbnailSize {
  url: string;
  width: number;
  height: number;
}

const useChannel = () => {
  const [channelAvatar, setChannelAvatar] = useState<FetchChannel[]>([]);

  useEffect(() => {
    apiClient
      .get<ChannelResponse>("/channels")
      .then((response) => setChannelAvatar(response.data.items))
      .catch((error) => {
        console.error("Error fetching channel information:", error);
      });
  }, []);
  return { channelAvatar };
};

export default useChannel;
