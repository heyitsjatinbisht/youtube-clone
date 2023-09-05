import "../HomePageVideos.css";
import Grid from "@mui/material/Grid";
import useVideos from "../Hooks/useVideos";
import VideoCard from "./VideoCard";
import VideoCardSkeleton from "./VideoCardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";
import { Link } from "react-router-dom";
interface Props {
  isOpen: boolean;
}

const HomePageVideos = ({ isOpen }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useVideos();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <p>{error.message}</p>;

  const fetchedVideoCount =
    data?.pages.reduce((total, page) => total + page.items.length, 0) || 0;

  return (
    <InfiniteScroll
      className={`infinte_scroll ${isOpen ? "open" : ""}`}
      dataLength={fetchedVideoCount}
      hasMore={!!hasNextPage}
      next={fetchNextPage}
      loader={""}
    >
      <Grid className="video_grid_container" container spacing={3} padding={3}>
        {isLoading &&
          skeletons.map((skeleton) => <VideoCardSkeleton key={skeleton} />)}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.items.map((video) => (
              <Grid
                className="video_grid"
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                key={video.id}
              >
                <Link className="Video_player_link" to={`/video/${video.id}`}>
                  <VideoCard
                    snippet={video.snippet}
                    statistics={video.statistics}
                  />
                </Link>
              </Grid>
            ))}
          </React.Fragment>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};

export default HomePageVideos;
