import "../SideBar.css";
import SidebarRow from "./SidebarRow";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContentCutIcon from "@mui/icons-material/ContentCut";

interface Props {
  isOpen: boolean;
}

const SideBar = ({ isOpen }: Props) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <SidebarRow selected Icon={HomeOutlinedIcon} title="Home" />
      <SidebarRow Icon={WhatshotOutlinedIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsOutlinedIcon} title="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarRow Icon={ContentCutIcon} title="Your clips" />
      <SidebarRow Icon={ExpandMoreIcon} title="Show More" />
      <hr />
    </div>
  );
};

export default SideBar;
