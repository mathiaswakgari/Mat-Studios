import { Text, VStack } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import color from "../color";
import { useState } from "react";
import SearchCategory from "../components/SearchCategory";
import useSearch from "../hooks/useSearch";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState("");
  const term = searchParams.get("term");
  const { data } = useSearch(term!);

  return (
    <VStack w={"100%"} color={color.textColor}>
      <Text alignSelf={"start"}>Search: {term}</Text>
      <SearchCategory
        selectedCategory={category}
        onCategoryClick={(category: string) => setCategory(category)}
      />
    </VStack>
  );
};

export default SearchPage;
