import { createBrowserRouter } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
]);

export default router;
