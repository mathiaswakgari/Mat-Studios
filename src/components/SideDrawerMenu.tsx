import { HStack, Text } from "@chakra-ui/react";
import color from "../color";

interface Props {
  catergory: {
    name: string;
    icon: JSX.Element;
  };
}

const SideDrawerMenu = ({ catergory }: Props) => {
  return (
    <>
      <HStack
        key={catergory.name}
        _hover={{
          backgroundColor: color.baseColor,
          transitionDuration: "400ms",
        }}
        cursor={"pointer"}
        bg={""}
        paddingY={1}
        paddingLeft={2}
        borderRadius={"full"}
        marginY={5}
      >
        {catergory.icon}
        <Text color={color.textColor}>{catergory.name}</Text>
      </HStack>
      <hr></hr>
    </>
  );
};

export default SideDrawerMenu;
