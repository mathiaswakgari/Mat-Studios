import { HStack, Text } from "@chakra-ui/react";
import color from "../color";

interface Props {
  category: {
    name: string;
    icon: JSX.Element;
    value?: string;
    selectedIcon?: JSX.Element;
  };
  onClick: (category: string) => void;
  selectedCategory: string;
}

const SideDrawerMenu = ({ category, onClick, selectedCategory }: Props) => {
  return (
    <>
      <HStack
        h={10}
        key={category.name}
        _hover={{
          backgroundColor: color.hoverColor,
          transitionDuration: "400ms",
        }}
        onClick={() => onClick(category.name.toLowerCase())}
        cursor={"pointer"}
        paddingLeft={2}
        borderRadius={"full"}
        marginY={5}
      >
        {selectedCategory === category.name.toLowerCase()
          ? category.selectedIcon
          : category.icon}

        <Text color={color.textColor}>{category.name}</Text>
      </HStack>
    </>
  );
};

export default SideDrawerMenu;
