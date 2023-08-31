import { Box, Typography } from "@mui/material";
import { Snippet, Statistics } from "../Hooks/useVideos";
import { formatShortString } from "../utils/ViewCount";
import { getTimeAgo } from "../utils/time";
import { useState } from "react";

interface Props {
  snippet: Snippet;
  statistics: Statistics;
}

const VideoDetail = ({ snippet, statistics }: Props) => {
  const formattedViewCount = formatShortString(statistics.viewCount);
  const timeAgo = getTimeAgo(snippet.publishedAt);

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box marginTop={1}>
      <Typography fontWeight={600} variant="h6">
        {snippet?.title}
      </Typography>
      <Typography variant="h6"> {snippet?.channelTitle}</Typography>

      <Box bgcolor={"rgb(0 0 0 / 10%)"} padding={2} borderRadius={2}>
        <Typography
          fontWeight={600}
        >{` ${formattedViewCount} views  ${timeAgo}`}</Typography>
        <Typography whiteSpace="pre-wrap">
          {expanded ? snippet.description : snippet.description.slice(0, 100)}
        </Typography>

        {snippet?.description.length > 100 && (
          <div onClick={handleExpandClick}>
            {expanded ? (
              <Typography fontWeight={600}>...less</Typography>
            ) : (
              <Typography fontWeight={600}>...more</Typography>
            )}
          </div>
        )}
      </Box>
    </Box>
  );
};

export default VideoDetail;
