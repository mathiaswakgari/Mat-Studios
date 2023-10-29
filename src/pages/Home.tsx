import VideosGrid from "../components/VideosGrid";
import useVideos from "../hooks/useVideos";

const Home = () => {
  const { videos } = useVideos();

  if (videos) return <VideosGrid videos={videos} />;

  return <div>Home</div>;
};

export default Home;
