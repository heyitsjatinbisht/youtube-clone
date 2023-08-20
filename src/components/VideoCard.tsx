import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";

import { Snippet } from "../Hooks/useVideos";

interface Props {
  snippet: Snippet;
}

const VideoCard = ({ snippet }: Props) => {
  return (
    <Card>
      <CardMedia component="img" src={snippet.thumbnails.medium.url} />
      <CardHeader>{snippet.title}</CardHeader>
    </Card>
  );
};

export default VideoCard;
