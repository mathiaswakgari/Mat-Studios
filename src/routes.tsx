import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Video from "./pages/VideoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { index: true, element: <Home /> },
      {
        path: "videos/:id",
        element: <Video />,
      },
    ],
  },
]);

export default router;
