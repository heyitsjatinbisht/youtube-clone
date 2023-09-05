import Header from "./components/Header";
import "./App.css";
import HomePageVideos from "./components/HomePageVideos";
import SideBar from "./components/SideBar";
import { useState } from "react";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="app">
      <Header toggleSidebar={toggleSidebar} />

      <div className="app_page">
        <SideBar isOpen={isSidebarOpen} />
        <HomePageVideos isOpen={isSidebarOpen} />
      </div>
    </div>
  );
};

export default App;
