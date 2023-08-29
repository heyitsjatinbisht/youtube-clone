import { useLocation } from "react-router-dom";
import useSearch from "../Hooks/useSearch";
import { Box, Card, CardContent, CardMedia } from "@mui/material";
import Header from "./Header";
import "../HomePageVideos.css";
import SideBar from "./SideBar";

const SearchPage = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");
  const { data, error } = useSearch(searchQuery || "");

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <Header />

      <div className="search_page">
        <SideBar />

        <div className="Search_videos">
          <h1>Search Results for "{searchQuery}"</h1>
          <Box paddingLeft={5}>
            {data?.items.map((result) => (
              <Card
                elevation={0}
                key={result.id}
                sx={{ display: "flex", margin: "10px" }}
              >
                <CardMedia
                  component="img"
                  src={result.snippet.thumbnails.medium.url}
                  sx={{ width: 400, height: 200, borderRadius: "6px" }}
                ></CardMedia>
                <CardContent>
                  <h2>{result.snippet.title}</h2>
                  <p>{result.snippet.description}</p>
                </CardContent>
              </Card>
            ))}
          </Box>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
