import "../HomePageVideos.css";
import Grid from "@mui/material/Grid";
import useVideos from "../Hooks/useVideos";
import VideoCard from "./VideoCard";

const HomePageVideos = () => {
  const { videos, error } = useVideos();

  return (
    <>
      {error && <p>{error}</p>}
      <Grid container spacing={3} padding={5}>
        {videos.map((video) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={video.id} spacing={5}>
            <VideoCard snippet={video.snippet} statistics={video.statistics} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomePageVideos;
