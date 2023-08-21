import Avatar from "@mui/material/Avatar";
import useChannel from "../Hooks/useChannel";
import { Box } from "@mui/material";

const ChannelAvatar = () => {
  const { channelAvatar } = useChannel();

  return (
    <>
      {channelAvatar.map((ch) => (
        <Box key={ch.id}>
          <Avatar src={ch.snippet.thumbnails.default.url} />
        </Box>
      ))}
    </>
  );
};

export default ChannelAvatar;
