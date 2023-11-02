import {
  Box,
  Image,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
} from "@chakra-ui/react";
import logo from "../assets/logos/matstudios-high-resolution-logo-transparent.svg";
import { AiOutlineMenu } from "react-icons/ai";
import color from "../color";
import categories from "../utils/categories";
import SideDrawerMenu from "./SideDrawerMenu";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SideDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg={color.bgColor}>
        <DrawerHeader>
          <HStack height={"22px"}>
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
              onClick={onClose}
            >
              <AiOutlineMenu
                color={color.businessNameColor}
                fontSize={"25px"}
              />
            </Box>
            <Box>
              <Image boxSize={"200px"} src={logo} objectFit={"fill"} />
            </Box>
          </HStack>
        </DrawerHeader>

        <DrawerBody>
          {categories.map((c) => (
            <SideDrawerMenu catergory={c} />
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
