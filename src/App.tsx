import Header from "./components/Header";
import "./App.css";
import HomePageVideos from "./components/HomePageVideos";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div className="app">
      <Header />

      <div className="app_page">
        <SideBar />
        <HomePageVideos />
      </div>
    </div>
  );
};

export default App;
