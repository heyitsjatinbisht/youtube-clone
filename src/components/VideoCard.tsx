import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { Snippet, Statistics } from "../Hooks/useVideos";
import { formatShortString } from "../utils/ViewCount";
import { getTimeAgo } from "../utils/time";
import ChannelAvatar from "./ChannelAvatar";

interface Props {
  snippet: Snippet;
  statistics: Statistics;
}

const VideoCard = ({ snippet, statistics }: Props) => {
  const formattedViewCount = formatShortString(statistics.viewCount);
  const timeAgo = getTimeAgo(snippet.publishedAt);

  return (
    <Box sx={{ width: 400 }}>
      <Card elevation={0}>
        <CardMedia component="img" src={snippet.thumbnails.medium.url} />
        <ChannelAvatar />
        <h3>{snippet.title}</h3>
        <p>{snippet.channelTitle}</p>
        <p>
          {` ${formattedViewCount} views • `}
          {timeAgo}
        </p>
      </Card>
    </Box>
  );
};

export default VideoCard;
