import "../HomePageVideos.css";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import useVideos from "../Hooks/useVideos";
import VideoCard from "./VideoCard";

const HomePageVideos = () => {
  const { videos, error } = useVideos();
  return (
    <>
      {error && <TextField>{error}</TextField>}
      <Grid container spacing={3}>
        {videos.map((video) => (
          <VideoCard key={video.id} snippet={video.snippet} />
        ))}
      </Grid>
    </>
  );
};

export default HomePageVideos;
