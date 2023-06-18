import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
const Header = () => {
  return (
    <>
      <div>Header</div>
      <MenuIcon />
      <img
        className="header_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
        alt=""
      />
      <input type="text" />
      <SearchIcon />
      <VideoCallIcon />
      <NotificationsIcon />
      <Avatar alt="img" src="" />
    </>
  );
};

export default Header;
