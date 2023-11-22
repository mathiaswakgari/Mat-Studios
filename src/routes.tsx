import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Video from "./pages/VideoPage";
import SearchPage from "./pages/SearchPage";
import ChannelPage from "./pages/ChannelPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <Home /> },
      {
        path: "videos/:id",
        element: <Video />,
      },
      { path: "channels/:id", element: <ChannelPage /> },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
]);

export default router;
