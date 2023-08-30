// import { useState, useEffect } from "react";
// import apiClient from "../services/api-client";

// interface ChannelResponse {
//   items: FetchChannel[];
// }
// export interface FetchChannel {
//   snippet: ChannelSnippet;
//   id: string;
// }
// interface ChannelSnippet {
//   thumbnails: ChannelThumbnail;
// }

// interface ChannelThumbnail {
//   default: ChannelThumbnailSize;
//   medium: ChannelThumbnailSize;
// }
// interface ChannelThumbnailSize {
//   url: string;
//   width: number;
//   height: number;
// }

// const useChannel = () => {
//   const [channelAvatar, setChannelAvatar] = useState<FetchChannel[]>([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     apiClient
//       .get<ChannelResponse>("/channels", {
//         params: {
//           part: "id",
//           managedByMe: true,
//           maxResults: 15,
//           mine: true,
//           mySubscribers: true,
//           key: import.meta.env.VITE_REACT_APP_API_KEY,
//         },
//       })
//       .then((response) => setChannelAvatar(response.data.items))
//       .catch((error) => setError(error.message));
//   }, []);
//   return { channelAvatar, error };
// };

// export default useChannel;
