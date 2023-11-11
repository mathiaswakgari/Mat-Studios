import { useContext } from "react";
import { Text } from "@chakra-ui/react";
import VideosGrid from "../components/VideosGrid";
import useVideos from "../hooks/useVideos";
import CategoryContext from "../contexts/categoryContext";

const Home = () => {
  const { category } = useContext(CategoryContext);
  const { data, isError, isFetching } = useVideos(category);
  if (isError) return <Text>Error</Text>;
  return <VideosGrid data={data!} isFetching={isFetching} />;

  // return <div>Home</div>;
};

export default Home;
