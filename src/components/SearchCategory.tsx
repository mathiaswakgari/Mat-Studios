import { Button, HStack } from "@chakra-ui/react";
import color from "../color";

interface Props {
  onCategoryClick: (category: string) => void;
  selectedCategory: string | "videos" | "channels";
}

const SearchCategory = ({ onCategoryClick, selectedCategory }: Props) => {
  return (
    <HStack alignSelf={"start"}>
      <Button
        bg={color.buttonColor}
        borderRadius={"lg"}
        fontSize={"xs"}
        size={"sm"}
        color={color.textColor}
        _hover={{
          bg: color.buttonColorTwo,
        }}
        value={""}
        isDisabled={!selectedCategory}
        onClick={() => onCategoryClick("")}
      >
        All
      </Button>
      <Button
        value={"videos"}
        bg={color.buttonColor}
        color={color.textColor}
        borderRadius={"lg"}
        fontSize={"xs"}
        size={"sm"}
        _hover={{
          bg: color.buttonColorTwo,
        }}
        isDisabled={selectedCategory === "videos"}
        onClick={(e) => onCategoryClick(e.currentTarget.value)}
      >
        Videos
      </Button>
      <Button
        value={"channels"}
        bg={color.buttonColor}
        color={color.textColor}
        borderRadius={"lg"}
        fontSize={"xs"}
        size={"sm"}
        _hover={{
          bg: color.buttonColorTwo,
        }}
        isDisabled={selectedCategory === "channels"}
        onClick={(e) => onCategoryClick(e.currentTarget.value)}
      >
        Channels
      </Button>
    </HStack>
  );
};

export default SearchCategory;
