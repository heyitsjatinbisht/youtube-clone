import { Box, Typography } from "@mui/material";
import { Snippet, Statistics } from "../Hooks/useVideos";
import { formatShortString } from "../utils/ViewCount";
import { getTimeAgo } from "../utils/time";

interface Props {
  snippet: Snippet;
  statistics: Statistics;
}

const VideoDetail = ({ snippet, statistics }: Props) => {
  const formattedViewCount = formatShortString(statistics.viewCount);
  const timeAgo = getTimeAgo(snippet.publishedAt);
  return (
    <Box marginLeft="4rem" marginTop={1}>
      <Typography fontWeight={600} variant="h6">
        {snippet?.title}
      </Typography>
      <Typography variant="h6"> {snippet?.channelTitle}</Typography>
      <Typography
        fontWeight={600}
      >{` ${formattedViewCount} views  ${timeAgo}`}</Typography>
      <Typography>{snippet?.description}</Typography>
    </Box>
  );
};

export default VideoDetail;
