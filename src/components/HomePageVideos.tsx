import "../HomePageVideos.css";
import Grid from "@mui/material/Grid";
import useVideos from "../Hooks/useVideos";
import VideoCard from "./VideoCard";
import VideoCardSkeleton from "./VideoCardSkeleton";

const HomePageVideos = () => {
  const { videos, error, isLoading } = useVideos();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <p>{error}</p>}
      <Grid container spacing={3} padding={3}>
        {isLoading &&
          skeletons.map((skeleton) => <VideoCardSkeleton key={skeleton} />)}
        {videos.map((video) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={video.id}>
            <VideoCard snippet={video.snippet} statistics={video.statistics} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomePageVideos;
