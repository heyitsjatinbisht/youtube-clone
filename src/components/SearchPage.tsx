import { useLocation } from "react-router-dom";
import useSearch from "../Hooks/useSearch";
import { Box, Card, CardContent, CardMedia } from "@mui/material";
import Header from "./Header";
import "../HomePageVideos.css";
import SideBar from "./SideBar";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";

const SearchPage = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");
  const { data, error, fetchNextPage, hasNextPage } = useSearch(
    searchQuery || ""
  );

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const fetchedVideoCount =
    data?.pages.reduce((total, page) => total + page.items.length, 0) || 0;

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />

      <div className="search_page">
        <SideBar isOpen={isSidebarOpen} />

        <div className="Search_videos">
          <InfiniteScroll
            className={`infinte_scroll ${isSidebarOpen ? "open" : ""}`}
            next={fetchNextPage}
            hasMore={!!hasNextPage}
            loader={""}
            dataLength={fetchedVideoCount}
          >
            <Box paddingLeft={5}>
              {data?.pages.map((page, index) => (
                <React.Fragment key={index}>
                  {page.items.map((video) => (
                    <Box key={video.id}>
                      {
                        <Card
                          elevation={0}
                          sx={{ display: "flex", margin: "10px" }}
                        >
                          <CardMedia
                            component="img"
                            src={video.snippet.thumbnails.medium.url}
                            sx={{
                              width: 400,
                              height: 200,
                              borderRadius: "6px",
                            }}
                          ></CardMedia>
                          <CardContent>
                            <h2>{video.snippet.title}</h2>
                            <p>{video.snippet.description}</p>
                          </CardContent>
                        </Card>
                      }
                    </Box>
                  ))}
                </React.Fragment>
              ))}
            </Box>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
