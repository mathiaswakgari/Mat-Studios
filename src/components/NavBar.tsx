import { Box, HStack, Image } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logos/logo-no-background.svg";
import color from "../color";
import SearchBar from "./SearchBar";
import ProfileMenu from "./ProfileMenu";

const NavBar = () => {
  return (
    <HStack
      height={"55px"}
      width={"full"}
      paddingX={2}
      borderBottom="1px"
      borderBottomColor={color.iconColor}
      position={"fixed"}
      justifyContent={"space-between"}
    >
      <HStack>
        <Box
          borderRadius={"full"}
          boxSize={"35px"}
          cursor={"pointer"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          _hover={{
            backgroundColor: color.baseColor,
            transitionDuration: "400ms",
          }}
        >
          <AiOutlineMenu color={color.businessNameColor} fontSize={"25px"} />
        </Box>
        <Box>
          <Image boxSize={"200px"} src={logo} objectFit={"fill"} />
        </Box>
      </HStack>
      <SearchBar />
      <ProfileMenu />
    </HStack>
  );
};

export default NavBar;
