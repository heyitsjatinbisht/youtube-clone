import Header from "./components/Header";
import "./App.css";
import RecommendedVideos from "./components/RecommendedVideos";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div className="app">
      <Header />

      <div className="app_page">
        <SideBar />
        <RecommendedVideos />
      </div>
    </div>
  );
};

export default App;
