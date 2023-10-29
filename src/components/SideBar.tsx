import { Text, VStack } from "@chakra-ui/react";
import categories from "../utils/categories";
import color from "../color";

const SideBar = () => {
  const sideBarCategories = [categories[0], categories[3], categories[6]];
  return (
    <VStack w={"80px"} h={"calc(100vh - 55px)"}>
      {sideBarCategories.map((c) => (
        <VStack paddingTop={5}>
          <VStack>
            {c.icon}
            <Text color={color.textColor}>{c.name}</Text>
          </VStack>
        </VStack>
      ))}
    </VStack>
  );
};

export default SideBar;
