import { createBrowserRouter } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import App from "./App";
import VideoDetailPage from "./components/VideoPlayer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  { path: "/video/:videoId", element: <VideoDetailPage videoId={""} /> },
]);

export default router;
