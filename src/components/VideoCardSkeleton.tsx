import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const VideoCardSkeleton = () => {
  return (
    <Box padding={2} sx={{ width: 400 }}>
      <Skeleton
        animation="wave"
        variant="rectangular"
        height={200}
        width={400}
      ></Skeleton>
      <Skeleton
        animation="wave"
        variant="text"
        sx={{ fontSize: "2rem" }}
      ></Skeleton>
      <Skeleton
        animation="wave"
        variant="text"
        width={250}
        sx={{ fontSize: "2rem" }}
      ></Skeleton>
      \{" "}
    </Box>
  );
};

export default VideoCardSkeleton;
