import { Text, VStack } from "@chakra-ui/react";
import categories from "../utils/categories";
import color from "../color";

const SideBar = () => {
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
        >
          <VStack>
            {c.icon}
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
