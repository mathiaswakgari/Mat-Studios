import { Text, VStack } from "@chakra-ui/react";
import categories from "../utils/categories";
import color from "../color";

interface Props {
  selectedCategory: string;
  onCategoryClick: (category: string) => void;
}

const SideBar = ({ selectedCategory, onCategoryClick }: Props) => {
  const sideBarCategories = [categories[0], categories[3], categories[6]];
  return (
    <VStack w={"80px"} h={"calc(100vh - 55px)"}>
      {sideBarCategories.map((c) => (
        <VStack
          _hover={{
            bg: color.hoverColor,
          }}
          marginLeft={5}
          cursor={"pointer"}
          key={c.name}
          paddingTop={5}
          w={"100%"}
          borderRadius={"2xl"}
          transitionDuration={"200ms"}
          onClick={() => onCategoryClick(c.name)}
        >
          <VStack>
            {c.name === selectedCategory ? c.selectedIcon! : c.icon}
            {/* {c.icon} */}
            <Text fontSize={"xs"} color={color.textColor}>
              {c.name}
            </Text>
          </VStack>
        </VStack>
      ))}
    </VStack>
  );
};

export default SideBar;
