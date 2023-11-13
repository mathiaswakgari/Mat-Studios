import { Text, VStack } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import color from "../color";
import { useState } from "react";
import SearchCategory from "../components/SearchCategory";
import useSearch from "../hooks/useSearch";
import SearchVideoCard from "../components/SearchVideoCard";
import { Video } from "../hooks/useVideos";
import SearchChannelCard from "../components/SearchChannelCard";
import { Channel } from "../hooks/useChannel";
import Loader from "../components/Loader";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState("");
  const term = searchParams.get("term");
  const { data, isFetching } = useSearch(term!, category);

  if (isFetching) return <Loader />;

  return (
    <VStack w={"100%"} color={color.textColor}>
      <Text alignSelf={"start"}>Search: {term}</Text>
      <SearchCategory
        selectedCategory={category}
        onCategoryClick={(category: string) => setCategory(category)}
      />
      <VStack
        w={{
          base: "100%",
          sm: "90%",
          xl: "100%",
        }}
      >
        {data?.data.items.map((s) => {
          if (s.id.kind === "youtube#video")
            return <SearchVideoCard video={s as Video} />;
          if (s.id.kind === "youtube#channel")
            return <SearchChannelCard channel={s as Channel} />;
        })}
      </VStack>
    </VStack>
  );
};

export default SearchPage;
