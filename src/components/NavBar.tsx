import { Box, HStack, Image } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logos/matstudios-high-resolution-logo-transparent.svg";
import color from "../color";
import SearchBar from "./SearchBar";
import ProfileMenu from "./ProfileMenu";
import { Link } from "react-router-dom";

interface Props {
  onToggle: () => void;
  onSearch: (searchTerm: string) => void;
}

const NavBar = ({ onToggle, onSearch }: Props) => {
  return (
    <HStack
      height={"55px"}
      width={"full"}
      paddingX={5}
      position={"fixed"}
      justifyContent={"space-between"}
      zIndex={10}
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
          onClick={onToggle}
        >
          <AiOutlineMenu color={color.businessNameColor} fontSize={"25px"} />
        </Box>
        <Box>
          <Link to={"/"}>
            <Image
              h={{ base: "20px", md: "30px" }}
              src={logo}
              objectFit={"fill"}
            />
          </Link>
        </Box>
      </HStack>
      <SearchBar onSearch={onSearch} />
      <ProfileMenu />
    </HStack>
  );
};

export default NavBar;
