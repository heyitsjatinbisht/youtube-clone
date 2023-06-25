import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import "../Header.css";
import MicIcon from "@mui/icons-material/Mic";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        {" "}
        <MenuIcon />
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt=""
        />
      </div>
      <div className="header_input_container">
        <div className="header_input">
          <input placeholder="Search" type="text" />
          <SearchIcon className="header_searchbutton" />
        </div>
        <div className="header_mic">
          <MicIcon />
        </div>
      </div>
      <div className="header_right">
        <VideoCallIcon />
        <NotificationsIcon />
        <Avatar alt="img" src="" />
      </div>
    </div>
  );
};

export default Header;
